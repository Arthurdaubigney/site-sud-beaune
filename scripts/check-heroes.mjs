// Échoue si la photo d'en-tête (première image de <main>) est utilisée sur plusieurs pages (hors accueil).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const hero = new Map();
for (const f of walk('dist').filter((x) => x.endsWith('index.html'))) {
  const p = f.replace(/^dist/, '').replace('index.html', '');
  if (p === '/') continue;
  const h = readFileSync(f, 'utf8'); const main = h.slice(h.indexOf('<main'), h.indexOf('</main>'));
  const m = main.match(/src="\/img\/([a-z0-9-]+)-(?:1400|2400)\.webp"/);
  if (!m) continue;
  hero.set(m[1], [...(hero.get(m[1]) ?? []), p]);
}
let bad = 0;
for (const [k, v] of hero) if (v.length > 1) { bad++; console.log('✗ en-tête en double', k, v.join(' ')); }
console.log(bad ? `${bad} photo(s) d'en-tête en double` : `✓ ${[...hero.values()].flat().length} pages, chaque en-tête est unique`);
process.exit(bad ? 1 : 0);
