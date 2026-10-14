import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// The small phone hero is part of the Portuguese homepage's initial response,
// so the browser can render it without another network round trip.
export const phoneHeroDataUrl = `data:image/avif;base64,${readFileSync(resolve('public/images/amazon-river-hero-phone-v4.avif')).toString('base64')}`;
