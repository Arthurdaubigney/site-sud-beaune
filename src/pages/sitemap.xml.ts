import type { APIRoute } from 'astro';
import { SITE, MAISONS, EXTENSION, SPECIALITES } from '../data/site';

export const GET: APIRoute = () => {
  const paths = [
    '/', '/nos-maisons/', '/antiquites/', '/rachat-succession/', '/expertise-estimation/', '/estimation-gratuite/', '/la-maison/', '/plan-du-site/',
    ...MAISONS.map((m) => `/nos-maisons/${m.slug}/`),
    `/nos-maisons/${EXTENSION.slug}/`,
    ...SPECIALITES.map((s) => `/antiquites/${s.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${new URL(p, SITE.url).toString()}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
