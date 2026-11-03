import { ALL_IMAGE_KEYS } from '../data/images';

const OBJECTS = ['commode-louis-xv', 'bronze-sculpture', 'pendule-xviii', 'vase-porcelaine', 'montre-gousset', 'tableau-corot', 'marqueterie-boulle', 'commode-wallace', 'tableau-paysage'];
const PLACES = ['vezere', 'perigord-chateau', 'angouleme', 'perigueux', 'la-rochelle', 'bordeaux-bourse', 'biarritz', 'pays-basque', 'nimes', 'toulouse', 'albi', 'limoges', 'poitiers', 'pau', 'collioure', 'rocamadour', 'cahors', 'gavarnie', 'montpellier', 'agen', 'carcassonne', 'navacelles', 'bordeaux-gravure'];

/** Distribue des images sans jamais en répéter une sur la même page. */
export function makePool() {
  const used = new Set<string>();
  return {
    take(preferred?: string, kind: 'object' | 'place' = 'place') {
      if (preferred && !used.has(preferred)) { used.add(preferred); return preferred; }
      const list = kind === 'object' ? OBJECTS : PLACES;
      const k = list.find((x) => !used.has(x)) ?? ALL_IMAGE_KEYS.find((x) => !used.has(x))!;
      used.add(k);
      return k;
    },
    reserve(...keys: string[]) { keys.forEach((k) => used.add(k)); },
  };
}
