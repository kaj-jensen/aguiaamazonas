// Keep the two public homepages compressed while preventing proxy script injection.
// All content continues to come from the deployment's GitHub-built static assets.
export async function onRequest(context) {
  const path = new URL(context.request.url).pathname;
  const response = await context.next();
  if (!['/', '/pt/'].includes(path) || context.request.method !== 'GET' || response.status !== 200 || !response.headers.get('Content-Type')?.includes('text/html')) return response;
  const headers = new Headers(response.headers);
  const cacheControl = headers.get('Cache-Control') || 'public, max-age=0, must-revalidate';
  headers.set('Cache-Control', `${cacheControl}, no-transform`);
  let body = response.body;
  const acceptsGzip = (context.request.headers.get('Accept-Encoding') || '').split(',').some(value => {
    const [encoding, ...params] = value.trim().split(';');
    return encoding === 'gzip' && !params.some(param => /^\s*q=0(?:\.0*)?\s*$/.test(param));
  });
  if (body && !headers.has('Content-Encoding') && acceptsGzip) {
    body = body.pipeThrough(new CompressionStream('gzip'));
    headers.set('Content-Encoding', 'gzip');
    headers.delete('Content-Length');
    const etag = headers.get('ETag');
    if (etag && !etag.startsWith('W/')) headers.set('ETag', `W/${etag}`);
  }
  const vary = headers.get('Vary');
  if (!vary?.toLowerCase().split(',').some(value => value.trim() === 'accept-encoding')) headers.set('Vary', vary ? `${vary}, Accept-Encoding` : 'Accept-Encoding');
  return new Response(body, { status: response.status, statusText: response.statusText, headers, encodeBody: 'manual' });
}
