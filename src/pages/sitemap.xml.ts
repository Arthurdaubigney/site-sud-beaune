import type { APIRoute } from 'astro';
import { SITE, SPECIALITES } from '../data/site';
import { REGIONS, DEPTS, zoneUrl } from '../data/territoires';

export const GET: APIRoute = () => {
  const paths = [
    '/', '/zones-intervention/', '/antiquites/', '/rachat-succession/', '/expertise-estimation/', '/estimation-gratuite/', '/a-propos/', '/plan-du-site/',
    ...REGIONS.map((r) => zoneUrl(r.slug)),
    ...DEPTS.map((d) => zoneUrl(d.slug)),
    ...SPECIALITES.map((s) => `/antiquites/${s.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${new URL(p, SITE.url).toString()}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
