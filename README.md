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
