import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const source = readFileSync(new URL('../public/analytics-consent.js', import.meta.url), 'utf8');
function browser({ saved = null, unavailable = false } = {}) {
  const events = {};
  const timers = [];
  const deleted = [];
  const scripts = [];
  let reloads = 0;
  let focused = false;
  let stored = saved;
  const button = choice => ({ dataset: { analyticsChoice: choice }, addEventListener: (_event, handler) => { events[choice] = handler; }, focus() {} });
  const buttons = [button('denied'), button('granted')];
  const preferences = { hidden: true, addEventListener: (_event, handler) => { events.preferences = handler; }, focus: () => { focused = true; } };
  const panel = { hidden: true, querySelectorAll: () => buttons, querySelector: () => buttons[0] };
  const originals = [
    { attributes: [{ name: 'src', value: 'https://www.googletagmanager.com/gtag/js?id=G-EXAMPLE' }], textContent: '' },
    { attributes: [], textContent: 'analytics initialization' },
  ];
  const template = { content: { querySelectorAll: () => originals } };
  const document = {
    addEventListener: (name, handler) => { events[name] = handler; },
    documentElement: { lang: 'en' },
    querySelector: selector => selector === '[data-analytics-panel]' ? panel : template,
    querySelectorAll: () => [preferences],
    createElement: () => ({ setAttribute() {} }),
    head: { appendChild: script => scripts.push(script) },
    get cookie() { return '_ga=old; _ga_EXAMPLE=old; cf_clearance=preserve'; },
    set cookie(value) { deleted.push(value); },
  };
  const win = { dataLayer: [], gtag: function() { this.dataLayer.push(arguments); }, addEventListener: (name, handler) => { events[name] = handler; }, dispatchEvent() {} };
  vm.runInNewContext(source, {
    document,
    location: { hostname: 'www.example.com', protocol: 'https:', origin: 'https://www.example.com', pathname: '/tour/', reload: () => { reloads++; } },
    localStorage: {
      getItem() { if (unavailable) throw new Error('Blocked'); return stored; },
      setItem(_key, value) { if (unavailable) throw new Error('Blocked'); stored = value; },
    },
    window: win,
    setTimeout: callback => timers.push(callback),
    URL,
    CustomEvent: class {},
  });
  return { win, timers, panel, events, scripts, deleted, preferences, stored: () => stored, reloads: () => reloads, focused: () => focused };
}
const preference = choice => JSON.stringify({ choice, expires: Date.now() + 60000 });

test('a fresh visitor gets a choice before any analytics script is appended', () => {
  const b = browser();
  assert.equal(b.scripts.length, 0);
  assert.equal(b.panel.hidden, false);
  assert.equal(b.preferences.hidden, false);
  assert.ok(b.deleted.length > 0);
  assert.ok(b.deleted.every(value => !value.startsWith('cf_clearance=')));
});
test('only explicit permission loads analytics, and repeated clicks do not load it again', () => {
  const b = browser();
  b.events.granted();
  assert.equal(b.scripts.length, 2);
  assert.equal(JSON.parse(b.stored()).choice, 'granted');
  b.events.granted();
  assert.equal(b.scripts.length, 2);
});
test('remembered rejection stays rejected across page loads', () => {
  const b = browser({ saved: preference('denied') });
  assert.equal(b.scripts.length, 0);
  assert.equal(b.panel.hidden, true);
});
test('remembered permission works and can be withdrawn from the footer', () => {
  const b = browser({ saved: preference('granted') });
  assert.equal(b.scripts.length, 2);
  b.events.preferences();
  assert.equal(b.panel.hidden, false);
  b.events.denied();
  assert.equal(JSON.parse(b.stored()).choice, 'denied');
  assert.equal(b.reloads(), 1);
});
test('expired, malformed and unavailable storage never grant implicit permission', () => {
  for (const options of [{ saved: '{broken' }, { saved: JSON.stringify({ choice: 'granted', expires: 1 }) }, { unavailable: true }]) {
    const b = browser(options);
    assert.equal(b.scripts.length, 0);
    assert.equal(b.panel.hidden, false);
  }
});
test('rejection returns keyboard focus and preference changes in another tab reload the page', () => {
  const b = browser();
  b.events.preferences();
  b.events.denied();
  assert.equal(b.focused(), true);
  b.events.storage({ key: 'analytics-consent-v2' });
  assert.equal(b.reloads(), 1);
});

test('contact clicks require consent and send no contact destination or message', () => {
  const b = browser();
  const click = href => b.events.click({ button: 0, target: { closest: () => ({ href }) } });
  click('https://wa.me/5592994587173?text=private');
  assert.equal(b.win.dataLayer.length, 0);
  b.events.granted();
  click('https://wa.me/5592994587173?text=private');
  click('mailto:private@example.com?body=secret');
  click('https://example.com/');
  assert.equal(b.win.dataLayer.length, 2);
  assert.deepEqual(Array.from(b.win.dataLayer, event => event[1]), ['whatsapp_click', 'email_click']);
  const serialized = JSON.stringify(b.win.dataLayer);
  assert.ok(!/private|secret|559299/.test(serialized));
  assert.equal(b.win.dataLayer[0][2].page_path, '/tour/');
  b.events.denied();
  click('mailto:private@example.com');
  assert.equal(b.win.dataLayer.length, 2);
});

test('early contact clicks wait for the worker forwarding function and respect withdrawal', () => {
  const b = browser({ saved: preference('granted') });
  const gtag = b.win.gtag;
  delete b.win.gtag;
  const click = () => b.events.click({ button: 0, target: { closest: () => ({ href: 'https://wa.me/123' }) } });
  click();
  assert.equal(b.win.dataLayer.length, 0);
  b.win.gtag = gtag;
  b.timers.shift()();
  assert.equal(b.win.dataLayer[0][1], 'whatsapp_click');
  delete b.win.gtag;
  click();
  b.events.denied();
  b.win.gtag = gtag;
  b.timers.shift()();
  assert.equal(b.win.dataLayer.length, 1);
});
