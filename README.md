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
