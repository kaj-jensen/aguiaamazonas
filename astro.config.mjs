import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.aguiaamazonas.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap(), partytown({ config: { forward: ['dataLayer.push'] } })],
});
