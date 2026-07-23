# WordPress migration audit

Audit date: 2026-07-23

This file records the legacy URLs found through the former WordPress catalogue,
navigation and indexed search results. Cloudflare Pages serves the mappings from
`public/_redirects`.

## Tour catalogue

All 12 products shown in the former WooCommerce catalogue have a permanent
redirect to a corresponding English or Portuguese experience page:

| Legacy group | Count | New destination |
| --- | ---: | --- |
| English day tour | 1 | English full-day experience |
| Portuguese day tour | 1 | Portuguese full-day experience |
| English lodge stays | 2 | English 3-day and 4-day lodge experiences |
| Portuguese lodge stays | 2 | Portuguese 3-day and 4-day lodge experiences |
| English cruises | 2 | English 3-day and 4-day cruises |
| Portuguese cruises | 2 | Portuguese 3-day and 4-day cruises |
| English extended safari | 1 | English Jaú safari |
| Portuguese extended safari | 1 | Portuguese Jaú safari |

The later WordPress survival-tour URL is also mapped directly to the new
survival experience.

## Editorial content

Five indexed WordPress articles are consolidated into the expanded bilingual
Brazilian Amazon travel guide:

- Rio Negro Brazil
- The weather in the Brazilian Rain Forest
- Animals in the Brazilian Rain Forest
- Quando visitar Amazonas?
- Best time to travel the Brazilian Amazon

Each redirect points to the most relevant guide section rather than only to the
guide header.

## Utility routes

Former contact, about, shop, cart, checkout, account, category, tag and feed
routes are redirected to a useful live destination. The obsolete WooCommerce
checkout is not recreated because reservations are handled directly with
Antonio.

## Technical checks

- Canonical URLs use `https://www.aguiaamazonas.com.br`.
- English and Portuguese pages provide reciprocal `hreflang` links.
- Every indexable page receives Open Graph and Twitter image metadata.
- The generated XML sitemap is declared in `robots.txt`.
- Tour pages include `TouristTrip`, itinerary and breadcrumb structured data.
- The site build checks internal links and local image references before launch.
