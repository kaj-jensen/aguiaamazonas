import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const failures = [];

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const routeFile = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (!clean) return join(dist, 'index.html');
  if (extname(clean)) return join(dist, clean);
  return join(dist, clean, 'index.html');
};

const localPath = (value, pageRoute) => {
  if (
    !value ||
    value.startsWith('#') ||
    value.startsWith('//') ||
    /^[a-z][a-z\d+.-]*:/i.test(value)
  ) {
    return null;
  }

  return new URL(value, `https://audit.invalid${pageRoute}`).pathname;
};

if (!existsSync(dist)) {
  console.error('Audit failed: dist does not exist. Run the Astro build first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const pageName = relative(dist, file).replaceAll('\\', '/');
  const pageRoute =
    pageName === 'index.html' ? '/' : `/${pageName.replace(/index\.html$/, '')}`;

  const required = [
    ['title', /<title>[^<]+<\/title>/i],
    ['meta description', /<meta\s+name="description"\s+content="[^"]+"/i],
    ['canonical', /<link\s+rel="canonical"\s+href="https:\/\/www\.aguiaamazonas\.com\.br\/[^"]*"/i],
    ['Open Graph image', /<meta\s+property="og:image"\s+content="https:\/\/www\.aguiaamazonas\.com\.br\/[^"]+"/i],
    ['Twitter image', /<meta\s+name="twitter:image"\s+content="https:\/\/www\.aguiaamazonas\.com\.br\/[^"]+"/i],
  ];

  for (const [label, pattern] of required) {
    if (!pattern.test(html)) failures.push(`${pageName}: missing ${label}`);
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const pathname = localPath(match[1], pageRoute);
    if (pathname && !existsSync(routeFile(pathname))) {
      failures.push(`${pageName}: missing local target ${match[1]}`);
    }
  }
}

const redirectsFile = join(root, 'public', '_redirects');
const redirects = readFileSync(redirectsFile, 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'));

for (const line of redirects) {
  const [, destination] = line.split(/\s+/);
  if (!destination?.startsWith('/')) continue;
  const pathname = destination.split(/[?#]/, 1)[0] || '/';
  if (!pathname.includes('*') && !existsSync(routeFile(pathname))) {
    failures.push(`_redirects: destination does not exist: ${destination}`);
  }
}

if (failures.length) {
  console.error(`Site audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Site audit passed: ${htmlFiles.length} HTML pages, essential metadata, local links, images and redirect destinations verified.`,
);
