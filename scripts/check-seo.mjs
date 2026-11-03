// Vérifie le SEO de chaque page construite (dist/) : title, description, h1 unique, alt/title des images, JSON-LD.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk('dist').filter((f) => f.endsWith('.html'));
let bad = 0;
const titles = new Set();
for (const f of pages) {
  const h = readFileSync(f, 'utf8');
  const get = (re) => (h.match(re) || [])[1];
  const title = get(/<title>([^<]*)<\/title>/);
  const desc = get(/<meta name="description" content="([^"]*)"/);
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const imgs = [...h.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const noAlt = imgs.filter((i) => !/ alt="[^"]{12,}"/.test(i) || !/ title="[^"]{8,}"/.test(i)).length;
  const ld = (h.match(/application\/ld\+json/g) || []).length;
  const problems = [];
  if (!title || title.length < 45 || title.length > 62) problems.push(`title ${title?.length}`);
  if (titles.has(title)) problems.push('title dupliqué'); titles.add(title);
  const utility = /404|mentions|plan-du-site/.test(f);
  if (!utility && (!desc || desc.length < 135 || desc.length > 160)) problems.push(`description ${desc?.length}`);
  if (h1 !== 1) problems.push(`h1 x${h1}`);
  if (noAlt) problems.push(`${noAlt} img sans alt/title`);
  if (!/og:image/.test(h) || !/twitter:card/.test(h)) problems.push('OG/Twitter manquant');
  if (!ld && !utility) problems.push('JSON-LD manquant');
  const lv = [...h.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  for (let i = 1; i < lv.length; i++) if (lv[i] - lv[i - 1] > 1) { problems.push(`saut de titre h${lv[i - 1]}→h${lv[i]}`); break; }
  console.log(`${problems.length ? '✗' : '✓'} ${f.replace('dist', '').replace('index.html', '')} | title ${title?.length} desc ${desc?.length} h1 ${h1} img ${imgs.length} ld ${ld}${problems.length ? ' | ' + problems.join(', ') : ''}`);
  bad += problems.length;
}
process.exit(bad ? 1 : 0);
