(() => {
  const panel = document.querySelector('[data-analytics-panel]');
  const template = document.querySelector('[data-analytics-scripts]');
  if (!panel || !template) return;
  const key = 'analytics-consent-v2';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  let loaded = false;
  let allowed = false;
  let opener;

  function preference() {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && ['granted', 'denied'].includes(saved.choice)
          && Number.isFinite(saved.expires) && saved.expires > Date.now()) return saved.choice;
    } catch { /* Unavailable storage means no remembered permission. */ }
    return null;
  }

  function clearAnalyticsCookies() {
    const host = location.hostname;
    const domains = new Set([host, host.replace(/^www\./, '')]);
    for (const item of document.cookie.split(';')) {
      const name = item.trim().split('=')[0];
      if (name !== '_ga' && !name.startsWith('_ga_') && name !== '_gid' && name !== '_gat') continue;
      const expired = `${name}=; Max-Age=0; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
      document.cookie = expired;
      for (const domain of domains) document.cookie = `${expired}; Domain=${domain}`;
    }
  }

  function startAnalytics() {
    if (loaded) return;
    loaded = true;
    allowed = true;
    for (const original of template.content.querySelectorAll('script')) {
      const script = document.createElement('script');
      for (const { name, value } of original.attributes) script.setAttribute(name, value);
      if (original.nonce) script.nonce = original.nonce;
      script.textContent = original.textContent;
      document.head.appendChild(script);
    }
    window.dispatchEvent(new CustomEvent('ptupdate'));
  }

  function choose(choice) {
    try { localStorage.setItem(key, JSON.stringify({ choice, expires: Date.now() + lifetime })); } catch { /* The choice still applies to this page. */ }
    panel.hidden = true;
    if (choice === 'granted') startAnalytics();
    else {
      allowed = false;
      clearAnalyticsCookies();
      // A reload also stops analytics running in a worker or another script.
      if (loaded) { location.reload(); return; }
    }
    opener?.focus();
  }

  for (const button of document.querySelectorAll('[data-analytics-preferences]')) {
    button.hidden = false;
    button.addEventListener('click', () => {
      opener = button;
      panel.hidden = false;
      panel.querySelector('button')?.focus();
    });
  }
  for (const button of panel.querySelectorAll('[data-analytics-choice]')) {
    button.addEventListener('click', () => choose(button.dataset.analyticsChoice));
  }
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) location.reload();
  });
  // Only record contact intent after consent. Never send the destination,
  // prefilled message, email address, query string or link text to Analytics.
  document.addEventListener('click', event => {
    if (!allowed || (event.button !== undefined && event.button !== 0)) return;
    const link = event.target?.closest?.('a[href]');
    if (!link) return;
    let url;
    try { url = new URL(link.href); } catch { return; }
    const method = url.protocol === 'mailto:' ? 'email'
      : url.protocol === 'https:' && ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname) ? 'whatsapp' : null;
    if (!method) return;
    window.dataLayer = window.dataLayer || [];
    function track() { window.dataLayer.push(arguments); }
    track('event', `${method}_click`, {
      send_to: 'G-SKR93ZM6BV',
      contact_method: method,
      page_location: `${location.origin}${location.pathname}`,
      page_path: location.pathname,
      page_language: document.documentElement.lang === 'pt-BR' ? 'pt-BR' : 'en',
      transport_type: 'beacon',
    });
  });
  const choice = preference();
  if (choice === 'granted') startAnalytics();
  else clearAnalyticsCookies();
  panel.hidden = choice !== null;
})();
