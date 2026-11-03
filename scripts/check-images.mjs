// Vérifie qu'aucune photo n'est répétée sur une même page (hors pied de page).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let bad = 0;
for (const f of walk('dist').filter((x) => x.endsWith('.html'))) {
  const h = readFileSync(f, 'utf8').replace(/<link[^>]*rel="preload"[^>]*>/g, '');
  const keys = [...h.matchAll(/<img[^>]* src="\/img\/([a-z0-9-]+)-1400\.webp"/g)].map((m) => m[1]);
  const dup = keys.filter((k, i) => keys.indexOf(k) !== i);
  if (dup.length) { bad++; console.log('✗', f.replace('dist', ''), [...new Set(dup)].join(', ')); }
}
console.log(bad ? `${bad} page(s) avec doublons` : '✓ aucune photo en double');
process.exit(bad ? 1 : 0);
