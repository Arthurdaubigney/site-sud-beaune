// Vérifie que tous les liens internes pointent vers une page générée et qu'aucune page n'est orpheline.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk('dist').filter((f) => f.endsWith('.html'));
const known = new Set(pages.map((f) => '/' + f.replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\.html$/, '')));
let bad = 0; const linked = new Set(['/']);
for (const f of pages) {
  const h = readFileSync(f, 'utf8');
  for (const m of h.matchAll(/<a [^>]*href="([^"#?]+)(?:#[^"]*)?"/g)) {
    const href = m[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    linked.add(href);
    if (!known.has(href) && !existsSync('dist' + href)) { bad++; console.log('✗ lien cassé', href, 'dans', f.replace('dist', '')); }
  }
}
const orphans = [...known].filter((p) => !linked.has(p) && p !== '/404.html' && p !== '/404');
if (orphans.length) console.log('Pages sans lien entrant :', orphans.join(', '));
console.log(bad ? `${bad} lien(s) cassé(s)` : `✓ ${pages.length} pages, aucun lien interne cassé`);
process.exit(bad ? 1 : 0);
