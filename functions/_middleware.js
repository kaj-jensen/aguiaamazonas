import { scriptPolicy } from "../lib/script-policy.js";
const POLICY = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' https://www.clarity.ms https://scripts.clarity.ms https://www.googletagmanager.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' https://*.clarity.ms https://c.bing.com data: https:; connect-src 'self' https://*.clarity.ms https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://cloudflareinsights.com; frame-src 'self'; manifest-src 'self'; media-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests";
// Keep the two public homepages compressed while preventing proxy script injection.
// All content continues to come from the deployment's GitHub-built static assets.
export async function onRequest(context) {
  const path = new URL(context.request.url).pathname;
  let response = await context.next();
  if (response.status === 304) {
    const headers=new Headers(response.headers);
    headers.delete("Content-Security-Policy");
    return new Response(null,{status:304,headers});
  }
  if (response.body && response.headers.get('Content-Type')?.includes('text/html')) {
    const html = await response.text();
    const secured = new Headers(response.headers);
    secured.set('Content-Security-Policy', await scriptPolicy(html, POLICY));
    secured.delete('Content-Length');
    secured.delete('Content-Encoding');
    response = new Response(html, {status: response.status, statusText: response.statusText, headers: secured});
  }
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
