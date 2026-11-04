import type { APIRoute } from 'astro';
import { SITE, SPECIALITES } from '../data/site';
import { REGIONS, DEPTS, zoneUrl } from '../data/territoires';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';
import { OBJETS } from '../data/objets';
import { GUIDES } from '../data/guides';

export const GET: APIRoute = () => {
  const paths = [
    '/', '/zones-intervention/', '/antiquites/', '/rachat-succession/', '/expertise-estimation/', '/estimation-gratuite/', '/a-propos/', '/plan-du-site/',
    '/conseils/',
    '/objets/',
    ...OBJETS.map((o) => `/objets/${o.slug}/`),
    ...SERVICES.map((x) => `/${x.slug}/`),
    ...CITIES.map((c) => `/${c.slug}/`),
    ...GUIDES.map((g) => `/conseils/${g.slug}/`),
    ...REGIONS.map((r) => zoneUrl(r.slug)),
    ...DEPTS.map((d) => zoneUrl(d.slug)),
    ...SPECIALITES.map((s) => `/antiquites/${s.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${new URL(p, SITE.url).toString()}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
