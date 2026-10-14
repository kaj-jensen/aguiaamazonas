import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import postcss from 'postcss';

// Astro merges font definitions with scoped component styles. Keep fonts inline,
// but load the below-fold component rules separately on the two homepages.
// The compiler's exact selectors and their cascade order are preserved.
await mkdir('dist/assets', { recursive: true });
for (const page of ['dist/index.html', 'dist/pt/index.html']) {
  let html = await readFile(page, 'utf8');
  const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].filter(match => match[1].includes('@font-face'));
  if (styles.length !== 1) throw new Error(`Expected one compiled font/component stylesheet in ${page}`);
  const [match] = styles;
  const root = postcss.parse(match[1]);
  const fonts = postcss.root();
  const components = postcss.root();
  for (const node of [...root.nodes]) {
    (node.type === 'atrule' && node.name === 'font-face' ? fonts : components).append(node);
  }
  const css = components.toString();
  const hash = createHash('sha256').update(css).digest('hex').slice(0,12);
  const href = `/assets/home-components-${hash}.css`;
  await writeFile(`dist${href}`, css);
  const replacement = `<style>${fonts}</style><link rel="stylesheet" href="${href}" media="print" onload="this.removeAttribute('media')"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
  html = html.replace(match[0], replacement);
  await writeFile(page, html);
  console.log(`${page}: deferred ${Buffer.byteLength(css)} bytes of below-fold component styles.`);
}
