import credits from './images.credits.json';

type Credit = { w: number; h: number; title: string; creator: string | null; license: string; page: string; via: string };
const C = credits as Record<string, Credit>;

/** Textes alternatifs et titres SEO de chaque visuel (français, descriptifs, avec ancrage local). */
const META: Record<string, { alt: string; title: string }> = {
  'commode-louis-xv': { alt: 'Commode galbée d’époque Louis XV en noyer, estimation de mobilier ancien dans le Sud-Ouest', title: 'Commode Louis XV en noyer – mobilier ancien estimé gratuitement' },
  'commode-wallace': { alt: 'Commode d’apparat Louis XV en marqueterie et bronzes dorés, exemple de mobilier d’exception', title: 'Commode d’apparat Louis XV en bronze doré – expertise d’antiquités' },
  'pendule-xviii': { alt: 'Cartel mural en bois doré du XVIIIe siècle, pendule ancienne expertisée par nos antiquaires', title: 'Cartel ancien en bois doré – expertise de pendules et horlogerie' },
  'vase-porcelaine': { alt: 'Vase en porcelaine de Chine au dragon, objet d’art asiatique estimé par nos experts', title: 'Vase en porcelaine ancienne – estimation d’objets d’art' },
  'marqueterie-boulle': { alt: 'Meuble à tiroirs en marqueterie Boulle orné de bronzes, mobilier d’époque expertisé', title: 'Marqueterie Boulle – expertise de mobilier ancien' },
  'montre-gousset': { alt: 'Montre de gousset ancienne sur un coussin de velours vert, bijou et horlogerie à estimer', title: 'Montre de gousset ancienne – expertise de bijoux et horlogerie' },
  'bronze-sculpture': { alt: 'Statuette en bronze à patine verte, bronze ancien estimé dans le Sud-Ouest', title: 'Statuette en bronze ancien – estimation de sculptures' },
  'tableau-corot': { alt: 'Tableau ancien, huile sur toile de Camille Corot représentant un paysage, expertise de peinture', title: 'Tableau ancien de l’école de Barbizon – expertise de peintures' },
  'tableau-paysage': { alt: 'Gravure ancienne d’un paysage arboré, estimation de dessins et estampes', title: 'Gravure ancienne – estimation de dessins et estampes' },
  'bordeaux-bourse': { alt: 'Place de la Bourse et miroir d’eau à Bordeaux, Maison Bordelaise d’antiquaires en Gironde', title: 'Bordeaux, place de la Bourse – antiquaire expert en Gironde' },
  'bordeaux-gravure': { alt: 'Vue cavalière ancienne de Bordeaux et de la Garonne, gravure de Hugo d’Alesi, patrimoine bordelais', title: 'Vue cavalière de Bordeaux, 1899 – patrimoine et antiquités en Gironde' },
  'biarritz': { alt: 'Grande Plage de Biarritz et son casino, Pays basque, zone d’intervention de nos antiquaires', title: 'Biarritz, Grande Plage – antiquaire expert au Pays basque' },
  'perigord-chateau': { alt: 'Château du Périgord noir entouré de verdure en Dordogne, patrimoine mobilier à expertiser', title: 'Château en Périgord noir – estimation et rachat d’antiquités en Dordogne' },
  'vezere': { alt: 'Vallée de la Vézère en Dordogne depuis la Roque Saint-Christophe, territoire de la Maison Périgord', title: 'Vallée de la Vézère – antiquaire expert en Périgord' },
  'la-rochelle': { alt: 'Vieux port et tours de La Rochelle vus du ciel, territoire de la Maison Charente', title: 'La Rochelle, vieux port – antiquaire expert en Charente-Maritime' },
  'nimes': { alt: 'Porte Auguste à Nîmes, rempart romain, Gard : zone d’intervention de nos antiquaires', title: 'Nîmes, porte Auguste – antiquaire expert dans le Gard' },
  'pays-basque': { alt: 'Falaise verdoyante et plage du Pays basque près de Biarritz, Maison Pays Basque d’antiquaires', title: 'Côte basque – antiquaire expert dans les Pyrénées-Atlantiques et les Landes' },
  'angouleme': { alt: 'Hôtel de ville d’Angoulême et son parc fleuri, Maison Charente d’antiquaires', title: 'Angoulême, hôtel de ville – antiquaire expert en Charente' },
  'perigueux': { alt: 'Cathédrale Saint-Front de Périgueux et ses coupoles, antiquaire expert en Dordogne', title: 'Périgueux, cathédrale Saint-Front – antiquaire en Dordogne' },
};

export type Img = { key: string; w: number; h: number; alt: string; title: string };

export function img(key: string): Img {
  const c = C[key];
  const m = META[key];
  if (!c || !m) throw new Error(`Image inconnue : ${key}`);
  return { key, w: c.w, h: c.h, alt: m.alt, title: m.title };
}

/** Lignes de crédit pour le pied de page, uniquement pour les images utilisées. */
export function creditLines(keys: Iterable<string>) {
  return [...keys]
    .filter((k) => C[k])
    .map((k) => ({
      key: k,
      text: `${C[k].title}${C[k].creator ? ' – ' + C[k].creator : ''}, ${C[k].license}, via ${C[k].via}`,
      href: C[k].page,
    }));
}
export const ALL_IMAGE_KEYS = Object.keys(C);
