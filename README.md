# Águia Amazonas — static migration

Astro website for Cloudflare Pages, replacing the current WordPress/WooCommerce installation.

## Principles

- English-first with a complete Portuguese counterpart.
- Tours are editorial experiences, not WooCommerce products.
- Booking begins through a pre-filled WhatsApp conversation with Antonio; Hotmail is the fallback.
- No database, checkout, account, newsletter or domain email is required.
- Existing WordPress product URLs are permanently redirected in `public/_redirects`.
- Current SiteGround images are temporary migration sources and must be downloaded into this repository before cutover.
- `public/images/amazon-river-hero.png` is a project-owned generated hero asset; individual tour photographs remain Antonio's originals.

## Local development

```sh
pnpm install
pnpm dev
```

## Analytics and first-screen performance

GA4 uses Astro's official Partytown integration, with the same `G-SKR93ZM6BV` measurement ID. The analytics script executes in a web worker so it does not block page rendering. GA4 `page_view` delivery must be checked after deployment; a loaded script alone is insufficient. Partytown's automatic page-exit `user_engagement` event is less reliable than the main-thread integration: https://partytown.qwik.dev/google-tag-manager/.

The build excludes only Partytown's internal sandbox HTML from content metadata checks and filters the deprecated fenced-frame interfaces out of the runtime's browser API inventory. It still audits every content page. If the vendor runtime changes, the patch step fails for review.

The CSP allows the same-origin analytics sandbox and its blob worker. Keep the domain's Cloudflare `Browser security headers` report-only policy aligned with `public/_headers`, excluding `upgrade-insecure-requests` because that directive is not valid in reporting mode. Bot Fight Mode was disabled with the owner's approval; DDoS protection, managed rules, and browser integrity checks remain enabled.

On the two homepages, first-screen CSS is derived from the complete global stylesheet at build time; the remaining global and catalogue styles load without blocking the first paint. Tour and guide pages keep their complete styles in the initial response.

The two homepages use a narrowly routed Pages middleware to add `Cache-Control: no-transform`, preventing Cloudflare from injecting extra scripts after Bot Fight Mode is disabled. The middleware preserves static response security headers and precompresses unencoded HTML for gzip clients because Cloudflare does not compress unencoded `no-transform` responses. Other routes and assets remain static. Functions use the existing Free Workers plan; no paid services are enabled. Preserve the `_routes.json` scope when deploying.

Analytics startup waits for the page load, hero image decoding and two animation frames, then starts the official Partytown runtime during browser idle time. This gives the initial screen a chance to paint before worker setup while preserving automatic GA4 page views. The idle callback has a one-second deadline and a fallback for browsers without that API.

The Portuguese homepage embeds the existing 8.9 KB phone AVIF in its responsive picture source. This removes a critical mobile image request; tablet and desktop image sources remain unchanged. The English phone image keeps its existing preload. `src/lib/phoneHero.ts` reads the maintained image file during the static build, so no duplicate image content is stored in the source.
