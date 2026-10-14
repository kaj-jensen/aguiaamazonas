import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// Analytics is noncritical: let the hero paint before starting its worker.
// Keep the official integration's runtime and copying/build hooks intact.
const analytics = partytown({ config: { forward: ['dataLayer.push'] } });
const setupAnalytics = analytics.hooks['astro:config:setup'];
analytics.hooks['astro:config:setup'] = options => setupAnalytics({
  ...options,
  injectScript: (stage, source) => options.injectScript(stage, `
    (() => {
      const start = async () => {
        const hero = document.querySelector('.hero-media img');
        if (hero) { try { await hero.decode(); } catch {} }
        requestAnimationFrame(() => requestAnimationFrame(() => {
          const run = () => { ${source} };
          if ('requestIdleCallback' in window) window.requestIdleCallback(run, { timeout: 1000 });
          else run();
        }));
      };
      if (document.readyState === 'complete') start();
      else window.addEventListener('load', start, { once: true });
    })();
  `),
});

export default defineConfig({
  site: 'https://www.aguiaamazonas.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap(), analytics],
});
