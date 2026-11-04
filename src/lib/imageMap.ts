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
import { DEPTS, REGIONS } from '../data/territoires';
import { ALL_IMAGE_KEYS } from '../data/images';

const OBJECTS = ['commode-wallace', 'pendule-xviii', 'marqueterie-boulle', 'tableau-paysage', 'vase-porcelaine', 'commode-louis-xv', 'bronze-sculpture', 'montre-gousset', 'tableau-corot', 'armoire-ancienne', 'bureau-louis-xv', 'horloges-comtoises', 'service-porcelaine', 'eventail', 'bague-ancienne', 'robe-vintage', 'fourrure', 'monnaies', 'pieces-or', 'medailles', 'verrerie-art', 'livres-anciens', 'cartes-postales', 'art-asiatique', 'instruments-marine', 'montres-collection', 'pendule-salon', 'design-vintage'];
const WIDE = ['salle-chateau', 'cabinet-curiosites', 'bibliotheque-chateau', 'boutique-antiquites'];
const PLACES = ['perigord-chateau', 'vezere', 'angouleme', 'perigueux', 'la-rochelle', 'bordeaux-bourse', 'biarritz', 'pays-basque', 'nimes', 'toulouse', 'albi', 'limoges', 'poitiers', 'pau', 'collioure', 'rocamadour', 'cahors', 'gavarnie', 'montpellier', 'agen', 'carcassonne', 'bordeaux-gravure', 'saint-emilion', 'narbonne', 'conques', 'perpignan', 'cognac', 'rochefort', 'pilat', 'sarlat', 'millau', 'foix', 'niort', 'montauban', 'mende', 'nerac', 'ales', 'aigues-mortes', 'bayonne', 'bergerac', 'beynac', 'beziers', 'brantome', 'brive', 'cap-ferret', 'castres', 'chauvigny', 'collonges', 'confolens', 'cordes-sur-ciel', 'figeac', 'gueret', 'hendaye', 'ile-de-re', 'jarnac', 'la-rochefoucauld', 'lectoure', 'gorges-du-tarn', 'mirepoix', 'moissac', 'oloron', 'pezenas', 'rodez', 'saint-cirq-lapopie', 'saintes', 'sete', 'thouars'];
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
    const all = [...new Set([...LISTS[kind], ...ALL])];
    k = all.sort((x, y) => (count.get(x) ?? 0) - (count.get(y) ?? 0))[0];
  }
  used.add(k); count.set(k, (count.get(k) ?? 0) + 1); MAP[slot] = k;
}


// 0. Photos d'en-tête : UNE photo par page, jamais deux fois sur tout le site (hors accueil).
const ALL = ALL_IMAGE_KEYS.filter((k) => k !== 'hero-urtubie');
const heroUsed = new Set<string>(['hero-urtubie']);
function hero(slot: string, pref: string | undefined, kind: Kind | 'any' = 'any') {
  const pool = kind === 'any' ? [] : LISTS[kind].filter((k) => ALL.includes(k));
  let k = pref && ALL.includes(pref) && !heroUsed.has(pref) ? pref : pool.find((x) => !heroUsed.has(x)) ?? ALL.find((x) => !heroUsed.has(x));
  if (!k) k = pref ?? ALL[0]; // plus aucune photo libre : réutilisation en dernier recours
  heroUsed.add(k); MAP[slot] = k; used.add(k); count.set(k, (count.get(k) ?? 0) + 1); protectedKeys.add(k);
}
hero('a-propos.hero', 'vezere', 'place');
hero('antiquites.hero', 'salle-chateau', 'wide');
hero('expertise.hero', 'cabinet-curiosites', 'wide');
hero('objets.hero', 'bibliotheque-chateau', 'wide');
hero('rachat.hero', 'perigord-chateau', 'place');
hero('estimation.hero', 'toulouse', 'place');
hero('zones.hero', 'rocamadour', 'place');
hero('conseils.hero', 'saint-emilion', 'place');
for (const s of SPECIALITES) hero(`spec.${s.slug}.hero`, s.img, 'object');
for (const o of OBJETS) hero(`objet.${o.slug}.hero`, o.img, 'object');
hero('region.nouvelle-aquitaine.hero', 'perigueux', 'place');
hero('region.occitanie.hero', 'montpellier', 'place');
for (const d of DEPTS) hero(`dept.${d.slug}.hero`, d.img, 'place');
for (const c of CITIES) hero(`city.${c.slug}.hero`, c.img, 'place');
for (const sv of SERVICES) hero(`service.${sv.slug}.hero`, undefined, 'any');
for (const g of GUIDES) hero(`guide.${g.slug}.hero`, undefined, 'any');

// 1. Photos imposées : spécialités (têtes de page) et carte « rachat » de la page Spécialités.
take('antiquites.rachatCard', 'boutique-antiquites', 'wide');
// 2. Pages principales.
const REQ: [string, string, Kind][] = [
  ['a-propos.band', 'saint-emilion', 'place'], ['a-propos.pairA', 'vezere', 'place'], ['a-propos.pairB', 'agen', 'place'], ['a-propos.cta', 'angouleme', 'place'],
  ['antiquites.cta', 'nimes', 'place'],
  ['rachat.band', 'la-rochelle', 'place'], ['rachat.pair', 'marqueterie-boulle', 'object'], ['rachat.cta', 'bordeaux-gravure', 'place'],
  ['expertise.band', 'albi', 'place'], ['expertise.pairA', 'commode-wallace', 'object'], ['expertise.pairB', 'pendule-xviii', 'object'], ['expertise.cta', 'pays-basque', 'place'],
  ['zones.cta', 'collioure', 'place'],
  ['region.nouvelle-aquitaine.pair', 'poitiers', 'place'], ['region.nouvelle-aquitaine.band', 'limoges', 'place'], ['region.nouvelle-aquitaine.cta', 'biarritz', 'place'],
  ['region.occitanie.pair', 'gavarnie', 'place'], ['region.occitanie.band', 'carcassonne', 'place'], ['region.occitanie.cta', 'cahors', 'place'],
];
for (const [slot, pref, kind] of REQ) take(slot, pref, kind);
for (const s of SPECIALITES) {
  take(`spec.${s.slug}.pair`, undefined, 'object');
  take(`spec.${s.slug}.band`, undefined, 'place');
  take(`spec.${s.slug}.cta`, undefined, 'place');
}

protecting = false;
// 3. Pages de contenu SEO (services, conseils, villes) : photos réparties au mieux parmi celles qui restent.
take('conseils.cta', undefined, 'wide');
for (const sv of SERVICES) { take(`service.${sv.slug}.cta`, undefined, 'wide'); }
for (const g of GUIDES) { take(`guide.${g.slug}.cta`, undefined, 'wide'); }
take('objets.cta', undefined, 'wide');
for (const o of OBJETS) take(`objet.${o.slug}.cta`, undefined, 'wide');
for (const c of CITIES) take(`city.${c.slug}.cta`, undefined, 'wide');

export const IMG = (slot: string) => {
  const k = MAP[slot];
  if (!k) throw new Error(`Emplacement photo inconnu : ${slot}`);
  return k;
};

/** Garantit qu'une photo secondaire n'est pas identique à celles déjà présentes sur la page. */
export const different = (k: string, ...avoid: string[]) => (avoid.includes(k) ? WIDE.find((x) => !avoid.includes(x))! : k);

/** Renvoie une fonction qui garantit qu'une même photo n'apparaît pas deux fois sur la page. */
export function uniquer(...seen: string[]) {
  const s = new Set(seen);
  return (k: string) => {
    if (!s.has(k)) { s.add(k); return k; }
    const alt = [...ALL].sort((a, b) => (count.get(a) ?? 0) - (count.get(b) ?? 0)).find((x) => !s.has(x)) ?? k;
    s.add(alt); return alt;
  };
}
