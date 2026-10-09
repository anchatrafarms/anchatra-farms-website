// Prefixes root-relative links ("/products/") with the site's base path, so pages keep
// working when the site is served from a sub-folder (set `base` in astro.config.mjs).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const onRequest = async (context, next) => {
  const response = await next();
  if (!base || !response.headers.get('content-type')?.includes('text/html')) return response;

  const html = (await response.text()).replace(/(\s(?:href|src|action)=")(\/(?!\/)[^"]*)"/g, (match, attr, path) =>
    path === base || path.startsWith(`${base}/`) ? match : `${attr}${base}${path}"`,
  );
  return new Response(html, { status: response.status, headers: response.headers });
};
