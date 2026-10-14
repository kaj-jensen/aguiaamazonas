import postcss from 'postcss';

const classes = new Set(['wrap', 'site-header', 'brand', 'desktop-nav', 'mobile-nav', 'language', 'nav-cta', 'floating-contact', 'eyebrow', 'button', 'intro', 'intro-copy']);
const elements = new Set(['html', 'body', 'a', 'img', 'h1', 'h2', 'h3', 'p']);

// Derive the first-screen rules from the complete stylesheet, preserving order
// and responsive rules so there is one source of truth for the visual design.
export function criticalStyles(css: string): string {
  const root = postcss.parse(css);
  root.walkRules(rule => {
    const selectors = rule.selectors.filter(selector => {
      if (selector === ':root' || selector === '*') return true;
      const className = selector.match(/^\.([\w-]+)/)?.[1];
      if (className) return classes.has(className) || className === 'hero' || className.startsWith('hero-');
      const element = selector.match(/^([a-z][a-z\d-]*)\b/i)?.[1];
      return !!element && elements.has(element);
    });
    if (selectors.length) rule.selectors = selectors;
    else rule.remove();
  });
  root.walkAtRules(rule => { if (rule.nodes && !rule.nodes.length) rule.remove(); });
  root.walkComments(comment => { comment.remove(); });
  return root.toString();
}
