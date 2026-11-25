// Loaded inside the Analytics worker only after analytics consent.
// Record contact intent without destinations, message content or URL queries.
document.addEventListener('click', event => {
  const link = event.target?.closest?.('a[href]');
  if (!link) return;
  let url;
  try { url = new URL(link.href); } catch { return; }
  const method = url.protocol === 'mailto:' ? 'email'
    : url.protocol === 'https:' && ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname) ? 'whatsapp' : null;
  if (!method) return;
  gtag('event', `${method}_click`, {
    send_to: 'G-SKR93ZM6BV',
    contact_method: method,
    page_location: `${location.origin}${location.pathname}`,
    page_path: location.pathname,
    page_language: document.documentElement.lang === 'pt-BR' ? 'pt-BR' : 'en',
  });
});
