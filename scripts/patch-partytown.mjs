import { readFileSync, writeFileSync } from 'node:fs';

// Partytown already excludes deprecated window APIs from its proxy inventory.
// The fenced-frame interfaces are also deprecated in current Chromium and is unused by GA4.
// Avoid reading it while preparing the worker, rather than triggering a warning.
const marker = 'new Set(["sharedStorage","SharedStorage"';
let patched = 0;
for (const name of ['partytown-sandbox-sw.html', 'partytown-sw.js', 'partytown-atomics.js']) {
  const path = `dist/~partytown/${name}`;
  const source = readFileSync(path, 'utf8');
  if (!source.includes(marker)) continue;
  writeFileSync(path, source.replaceAll(marker, 'new Set(["fence","FencedFrame","FencedFrameConfig","HTMLFencedFrameElement","sharedStorage","SharedStorage"'));
  patched++;
}
if (patched !== 3) throw new Error('Partytown runtime changed: review its deprecated API filter before publishing.');
console.log(`Avoided deprecated FencedFrame reads in ${patched} analytics runtime files.`);
