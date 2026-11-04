/**
 * Attribution globale des photos des pages principales : une même photo n'est jamais
 * utilisée sur deux pages principales différentes (À propos, Spécialités, chaque spécialité,
 * Succession, Expertise, Estimation, Zones, régions).
 * Les emplacements sont attribués dans l'ordre ci-dessous ; une photo déjà prise est remplacée
 * par la première photo libre du même type.
 */
import { SPECIALITES } from '../data/site';
import { SERVICES } from '../data/services';
import { GUIDES } from '../data/guides';
import { CITIES } from '../data/cities';
import { OBJETS } from '../data/objets';

const OBJECTS = ['commode-wallace', 'pendule-xviii', 'marqueterie-boulle', 'tableau-paysage', 'vase-porcelaine', 'commode-louis-xv', 'bronze-sculpture', 'montre-gousset'];
const WIDE = ['salle-chateau', 'cabinet-curiosites', 'bibliotheque-chateau', 'boutique-antiquites'];
const PLACES = ['perigord-chateau', 'vezere', 'angouleme', 'perigueux', 'la-rochelle', 'bordeaux-bourse', 'biarritz', 'pays-basque', 'nimes', 'toulouse', 'albi', 'limoges', 'poitiers', 'pau', 'collioure', 'rocamadour', 'cahors', 'gavarnie', 'montpellier', 'agen', 'carcassonne', 'bordeaux-gravure', 'saint-emilion', 'narbonne', 'conques', 'perpignan', 'cognac', 'rochefort', 'pilat', 'sarlat', 'millau', 'foix', 'niort', 'montauban', 'mende', 'nerac'];
type Kind = 'object' | 'wide' | 'place';
const LISTS: Record<Kind, string[]> = { object: OBJECTS, wide: WIDE, place: PLACES };

const used = new Set<string>();
const count = new Map<string, number>();
const protectedKeys = new Set<string>(); // photos des pages principales : jamais réutilisées en repli
const MAP: Record<string, string> = {};
let protecting = true;
function take(slot: string, pref: string | undefined, kind: Kind) {
  let k: string | undefined = pref && !used.has(pref) ? pref : LISTS[kind].find((x) => !used.has(x));
  if (!k) {
    // Réserve épuisée : on réutilise la photo la moins employée parmi celles qui ne sont pas protégées.
    const all = [...LISTS[kind], ...OBJECTS, ...WIDE, ...PLACES].filter((x) => !protectedKeys.has(x));
    k = all.sort((x, y) => (count.get(x) ?? 0) - (count.get(y) ?? 0))[0];
  }
  used.add(k); count.set(k, (count.get(k) ?? 0) + 1); MAP[slot] = k;
  if (protecting && (!slot.startsWith('spec.') || slot.endsWith('.hero'))) protectedKeys.add(k);
}

// 1. Photos imposées : spécialités (têtes de page) et carte « rachat » de la page Spécialités.
for (const s of SPECIALITES) take(`spec.${s.slug}.hero`, s.img, 'object');
take('antiquites.rachatCard', 'boutique-antiquites', 'wide');
// 2. Pages principales.
const REQ: [string, string, Kind][] = [
  ['a-propos.hero', 'bibliotheque-chateau', 'wide'], ['a-propos.band', 'saint-emilion', 'place'], ['a-propos.pairA', 'vezere', 'place'], ['a-propos.pairB', 'agen', 'place'], ['a-propos.cta', 'angouleme', 'place'],
  ['antiquites.hero', 'salle-chateau', 'wide'], ['antiquites.cta', 'nimes', 'place'],
  ['rachat.hero', 'perigord-chateau', 'place'], ['rachat.band', 'la-rochelle', 'place'], ['rachat.pair', 'marqueterie-boulle', 'object'], ['rachat.cta', 'bordeaux-gravure', 'place'],
  ['expertise.hero', 'cabinet-curiosites', 'wide'], ['expertise.band', 'albi', 'place'], ['expertise.pairA', 'commode-wallace', 'object'], ['expertise.pairB', 'pendule-xviii', 'object'], ['expertise.cta', 'pays-basque', 'place'],
  ['estimation.hero', 'toulouse', 'place'],
  ['zones.hero', 'rocamadour', 'place'], ['zones.cta', 'collioure', 'place'],
  ['region.nouvelle-aquitaine.hero', 'perigueux', 'place'], ['region.nouvelle-aquitaine.pair', 'poitiers', 'place'], ['region.nouvelle-aquitaine.band', 'limoges', 'place'], ['region.nouvelle-aquitaine.cta', 'biarritz', 'place'],
  ['region.occitanie.hero', 'montpellier', 'place'], ['region.occitanie.pair', 'gavarnie', 'place'], ['region.occitanie.band', 'carcassonne', 'place'], ['region.occitanie.cta', 'cahors', 'place'],
];
for (const [slot, pref, kind] of REQ) take(slot, pref, kind);
for (const s of SPECIALITES) {
  take(`spec.${s.slug}.pair`, undefined, 'object');
  take(`spec.${s.slug}.band`, undefined, 'place');
  take(`spec.${s.slug}.cta`, undefined, 'place');
}

protecting = false;
// 3. Pages de contenu SEO (services, conseils, villes) : photos réparties au mieux parmi celles qui restent.
take('conseils.hero', undefined, 'wide'); take('conseils.cta', undefined, 'wide');
for (const sv of SERVICES) { take(`service.${sv.slug}.hero`, undefined, 'wide'); take(`service.${sv.slug}.cta`, undefined, 'wide'); }
for (const g of GUIDES) { take(`guide.${g.slug}.hero`, undefined, g.cluster === 'meubles' || g.cluster === 'objets' ? 'object' : 'wide'); take(`guide.${g.slug}.cta`, undefined, 'wide'); }
take('objets.hero', undefined, 'wide'); take('objets.cta', undefined, 'wide');
for (const o of OBJETS) take(`objet.${o.slug}.cta`, undefined, 'wide');
for (const c of CITIES) take(`city.${c.slug}.cta`, undefined, 'wide');

export const IMG = (slot: string) => {
  const k = MAP[slot];
  if (!k) throw new Error(`Emplacement photo inconnu : ${slot}`);
  return k;
};

/** Garantit qu'une photo secondaire n'est pas identique à celles déjà présentes sur la page. */
export const different = (k: string, ...avoid: string[]) => (avoid.includes(k) ? WIDE.find((x) => !avoid.includes(x))! : k);
