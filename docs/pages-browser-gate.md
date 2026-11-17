# Native Pages release gate

Keep the existing Cloudflare Pages GitHub integration and project domains. The existing Cloudflare build commands remain in place: `pnpm build` for Ole, `npm run build` for Aguia, and `npm run build:en` / `npm run build:pt` for the matching Fortaleza project. Each now invokes the Chromium gate in source. The build script must complete the existing production build and desktop/mobile Chromium tests before Cloudflare can publish the output directory. No account-wide Pages API token is introduced.

Browser tests run locally against Wrangler Pages, including Pages Functions where present. Third-party CAPTCHA is stubbed only in the test browser, and form POSTs are intercepted so browser checks do not send email or create leads. Live preview and production checks must pass after each rollout. No notification senders or schedules are added.
