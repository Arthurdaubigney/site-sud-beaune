/** Territoire couvert : toute la Nouvelle-Aquitaine (12 départements) et toute l'Occitanie (13 départements). */
export type RegionSlug = 'nouvelle-aquitaine' | 'occitanie';

export type Region = {
  slug: RegionSlug;
  name: string;
  img: string;
  place: string;
  prefecture: string;
  lead: string;
  paragraphs: string[];
  titleTag: string;
  metaDesc: string;
  h1: string;
};

export type Dept = {
  num: string;
  slug: string;
  name: string;
  in: string;
  region: RegionSlug;
  pref: string;
  cities: string[];
  img: string;
  place: string;
  heritage: string;
  featured?: boolean;
};

export const REGIONS: Region[] = [
  {
    slug: 'nouvelle-aquitaine',
    name: 'Nouvelle-Aquitaine',
    img: 'perigueux',
    place: 'cathédrale Saint-Front de Périgueux',
    prefecture: 'Bordeaux',
    h1: 'Antiquaire expert en Nouvelle-Aquitaine',
    titleTag: 'Antiquaire Nouvelle-Aquitaine : estimation gratuite, rachat',
    metaDesc:
      'Antiquaire et expert dans les 12 départements de Nouvelle-Aquitaine : Bordeaux, Poitiers, Limoges, Biarritz. Estimation gratuite et rachat de succession.',
    lead: 'De La Rochelle à Biarritz, de Limoges au Périgord : nous estimons, expertisons et rachetons les antiquités des douze départements de Nouvelle-Aquitaine.',
    paragraphs: [
      'La Nouvelle-Aquitaine est la plus vaste région de France, et son patrimoine mobilier est à l’image de sa diversité : hôtels d’armateurs de La Rochelle et de Bordeaux, châteaux du Périgord, demeures du Limousin, tapisseries d’Aubusson, porcelaines de Limoges, villas de Biarritz et fermes basques.',
      'Notre équipe se déplace gratuitement dans les douze départements pour estimer vos objets d’art, organiser un inventaire de succession ou racheter une collection. Une première estimation à partir de photographies vous est remise gratuitement.',
    ],
  },
  {
    slug: 'occitanie',
    name: 'Occitanie',
    img: 'montpellier',
    place: 'place de la Comédie à Montpellier',
    prefecture: 'Toulouse',
    h1: 'Antiquaire expert en Occitanie',
    titleTag: 'Antiquaire Occitanie : estimation gratuite, rachat',
    metaDesc:
      'Antiquaire et expert dans les 13 départements d’Occitanie : Toulouse, Montpellier, Nîmes, Perpignan. Estimation gratuite et rachat de succession.',
    lead: 'De Toulouse à Perpignan, de Montpellier aux Pyrénées : nous estimons et rachetons les antiquités des treize départements d’Occitanie.',
    paragraphs: [
      'L’Occitanie réunit des patrimoines très différents : hôtels particuliers de Toulouse et de Montpellier, mas du Gard, demeures de Pézenas, maisons de maître du Quercy, abbayes du Rouergue, mobilier pyrénéen et catalan, faïences du Languedoc.',
      'Nos experts interviennent gratuitement dans les treize départements pour l’estimation, l’expertise et le rachat de mobilier, tableaux, bronzes, bijoux et objets de collection, avec un règlement sécurisé et un enlèvement assuré.',
    ],
  },
];

export const DEPTS: Dept[] = [
  // ---------------- Nouvelle-Aquitaine ----------------
  { num: '16', slug: 'charente-16', name: 'Charente', in: 'en Charente', region: 'nouvelle-aquitaine', pref: 'Angoulême', cities: ['Angoulême', 'Cognac', 'Confolens', 'Barbezieux-Saint-Hilaire', 'La Rochefoucauld'], img: 'angouleme', place: 'Hôtel de ville d’Angoulême', heritage: 'Demeures du Cognaçais, logis charentais et hôtels particuliers d’Angoulême conservent du mobilier de noyer, des faïences, de l’argenterie armoriée et des tableaux de famille.' },
  { num: '17', slug: 'charente-maritime-17', name: 'Charente-Maritime', in: 'en Charente-Maritime', region: 'nouvelle-aquitaine', pref: 'La Rochelle', cities: ['La Rochelle', 'Rochefort', 'Saintes', 'Royan', 'Île de Ré', 'Île d’Oléron'], img: 'la-rochelle', place: 'Vieux port de La Rochelle', heritage: 'Ports de mer et maisons d’armateurs ont laissé des instruments de navigation, des cartes marines, des meubles de bord et des objets venus des Antilles et d’Orient.', featured: true },
  { num: '19', slug: 'correze-19', name: 'Corrèze', in: 'en Corrèze', region: 'nouvelle-aquitaine', pref: 'Tulle', cities: ['Brive-la-Gaillarde', 'Tulle', 'Ussel', 'Uzerche', 'Collonges-la-Rouge'], img: 'vezere', place: 'Vallée de la Vézère', heritage: 'Châteaux et maisons de notables corréziens abritent du mobilier de campagne, des orfèvreries, des livres anciens et des objets de collection.' },
  { num: '23', slug: 'creuse-23', name: 'Creuse', in: 'dans la Creuse', region: 'nouvelle-aquitaine', pref: 'Guéret', cities: ['Guéret', 'Aubusson', 'Felletin', 'La Souterraine', 'Bourganeuf'], img: 'limoges', place: 'Gare de Limoges-Bénédictins', heritage: 'Terre des tapisseries d’Aubusson et de Felletin, la Creuse renferme tapisseries, tentures, mobilier rustique et objets d’art populaire.' },
  { num: '24', slug: 'dordogne-24', name: 'Dordogne', in: 'en Dordogne', region: 'nouvelle-aquitaine', pref: 'Périgueux', cities: ['Périgueux', 'Bergerac', 'Sarlat-la-Canéda', 'Brantôme', 'Les Eyzies', 'Terrasson-Lavilledieu'], img: 'sarlat', place: 'Place de la Liberté à Sarlat-la-Canéda', heritage: 'Manoirs, gentilhommières et châteaux du Périgord renferment mobilier d’époque, tapisseries, armes anciennes et collections accumulées sur plusieurs générations.', featured: true },
  { num: '33', slug: 'gironde-33', name: 'Gironde', in: 'en Gironde', region: 'nouvelle-aquitaine', pref: 'Bordeaux', cities: ['Bordeaux', 'Arcachon', 'Libourne', 'Saint-Émilion', 'Pessac', 'Mérignac', 'Cap Ferret'], img: 'bordeaux-bourse', place: 'Place de la Bourse à Bordeaux', heritage: 'Commerce atlantique et grands crus ont enrichi les intérieurs bordelais : acajou, bronzes dorés, pendules, porcelaines de la Compagnie des Indes et argenterie de négociants.', featured: true },
  { num: '40', slug: 'landes-40', name: 'Landes', in: 'dans les Landes', region: 'nouvelle-aquitaine', pref: 'Mont-de-Marsan', cities: ['Mont-de-Marsan', 'Dax', 'Hossegor', 'Mimizan', 'Saint-Sever', 'Capbreton'], img: 'pays-basque', place: 'Côte atlantique près de Biarritz', heritage: 'Maisons landaises, villas balnéaires et demeures thermales de Dax recèlent du mobilier régional, des bijoux, des tableaux et des objets de villégiature.' },
  { num: '47', slug: 'lot-et-garonne-47', name: 'Lot-et-Garonne', in: 'dans le Lot-et-Garonne', region: 'nouvelle-aquitaine', pref: 'Agen', cities: ['Agen', 'Villeneuve-sur-Lot', 'Marmande', 'Nérac', 'Tonneins', 'Fumel'], img: 'villeneuve', place: 'Pont Vieux de Villeneuve-sur-Lot', heritage: 'Bastides, maisons à colombages et châteaux de la vallée de la Garonne conservent mobilier gascon, faïences, argenterie et objets de famille.' },
  { num: '64', slug: 'pyrenees-atlantiques-64', name: 'Pyrénées-Atlantiques', in: 'dans les Pyrénées-Atlantiques', region: 'nouvelle-aquitaine', pref: 'Pau', cities: ['Biarritz', 'Bayonne', 'Saint-Jean-de-Luz', 'Pau', 'Oloron-Sainte-Marie', 'Hendaye'], img: 'biarritz', place: 'Grande Plage de Biarritz', heritage: 'Mobilier basque et béarnais, argenterie de culte, villas Belle Époque et peintures de l’école basque forment un patrimoine unique.', featured: true },
  { num: '79', slug: 'deux-sevres-79', name: 'Deux-Sèvres', in: 'dans les Deux-Sèvres', region: 'nouvelle-aquitaine', pref: 'Niort', cities: ['Niort', 'Parthenay', 'Bressuire', 'Thouars', 'Melle', 'Saint-Maixent-l’École'], img: 'niort', place: 'Donjon de Niort', heritage: 'Logis poitevins, maisons de notables niortaises et châteaux du Thouarsais abritent mobilier de campagne, faïences, orfèvrerie et tableaux.' },
  { num: '86', slug: 'vienne-86', name: 'Vienne', in: 'dans la Vienne', region: 'nouvelle-aquitaine', pref: 'Poitiers', cities: ['Poitiers', 'Châtellerault', 'Loudun', 'Montmorillon', 'Chauvigny'], img: 'poitiers', place: 'Notre-Dame-la-Grande à Poitiers', heritage: 'Entre Poitiers, Châtellerault et le Loudunais, hôtels particuliers et demeures de campagne renferment mobilier ancien, sculptures et objets religieux.' },
  { num: '87', slug: 'haute-vienne-87', name: 'Haute-Vienne', in: 'en Haute-Vienne', region: 'nouvelle-aquitaine', pref: 'Limoges', cities: ['Limoges', 'Saint-Junien', 'Bellac', 'Rochechouart', 'Saint-Yrieix-la-Perche'], img: 'limoges', place: 'Gare de Limoges-Bénédictins', heritage: 'Capitale de la porcelaine et de l’émail, la Haute-Vienne offre porcelaines de Limoges, émaux, mobilier limousin et arts de la table.' },
  // ---------------- Occitanie ----------------
  { num: '09', slug: 'ariege-09', name: 'Ariège', in: 'en Ariège', region: 'occitanie', pref: 'Foix', cities: ['Foix', 'Pamiers', 'Saint-Girons', 'Mirepoix', 'Lavelanet'], img: 'foix', place: 'Château de Foix', heritage: 'Maisons de montagne, demeures de Mirepoix et châteaux cathares conservent mobilier pyrénéen, objets de culte et textiles anciens.' },
  { num: '11', slug: 'aude-11', name: 'Aude', in: 'dans l’Aude', region: 'occitanie', pref: 'Carcassonne', cities: ['Carcassonne', 'Narbonne', 'Limoux', 'Castelnaudary', 'Lézignan-Corbières'], img: 'carcassonne', place: 'Cité de Carcassonne et le pont Vieux', heritage: 'Entre Carcassonne, Narbonne et les Corbières, demeures viticoles et maisons de ville regorgent de mobilier languedocien, de faïences et de tableaux.' },
  { num: '12', slug: 'aveyron-12', name: 'Aveyron', in: 'en Aveyron', region: 'occitanie', pref: 'Rodez', cities: ['Rodez', 'Millau', 'Villefranche-de-Rouergue', 'Espalion', 'Conques', 'Saint-Affrique'], img: 'millau', place: 'Millau et son viaduc', heritage: 'Fermes du Rouergue, abbayes et maisons de maître abritent mobilier rouergat, orfèvrerie religieuse et objets d’art populaire.' },
  { num: '30', slug: 'gard-30', name: 'Gard', in: 'dans le Gard', region: 'occitanie', pref: 'Nîmes', cities: ['Nîmes', 'Alès', 'Uzès', 'Beaucaire', 'Bagnols-sur-Cèze', 'Aigues-Mortes'], img: 'nimes', place: 'Porte Auguste à Nîmes', heritage: 'Mas provençaux, hôtels nîmois et demeures d’Uzès conservent mobilier provençal, faïences, argenterie et tableaux de l’école de Nîmes.', featured: true },
  { num: '31', slug: 'haute-garonne-31', name: 'Haute-Garonne', in: 'en Haute-Garonne', region: 'occitanie', pref: 'Toulouse', cities: ['Toulouse', 'Blagnac', 'Muret', 'Saint-Gaudens', 'Colomiers', 'Revel'], img: 'toulouse', place: 'Place du Capitole à Toulouse', heritage: 'La ville rose et ses hôtels de pastellistes ont laissé mobilier d’apparat, peintures, bronzes, pendules et objets d’art de qualité.', featured: true },
  { num: '32', slug: 'gers-32', name: 'Gers', in: 'dans le Gers', region: 'occitanie', pref: 'Auch', cities: ['Auch', 'Condom', 'Lectoure', 'L’Isle-Jourdain', 'Fleurance', 'Éauze'], img: 'auch', place: 'Escalier monumental d’Auch', heritage: 'Châteaux armagnacais et maisons de bourg gersoises renferment mobilier gascon, orfèvrerie, faïences et livres anciens.' },
  { num: '34', slug: 'herault-34', name: 'Hérault', in: 'dans l’Hérault', region: 'occitanie', pref: 'Montpellier', cities: ['Montpellier', 'Béziers', 'Sète', 'Pézenas', 'Agde', 'Lunel'], img: 'montpellier', place: 'Place de la Comédie à Montpellier', heritage: 'Hôtels particuliers de Montpellier, maisons de Pézenas et domaines viticoles abritent mobilier languedocien, faïences, tableaux et objets d’art.', featured: true },
  { num: '46', slug: 'lot-46', name: 'Lot', in: 'dans le Lot', region: 'occitanie', pref: 'Cahors', cities: ['Cahors', 'Figeac', 'Gourdon', 'Rocamadour', 'Souillac', 'Saint-Céré'], img: 'cahors', place: 'Pont Valentré à Cahors', heritage: 'Manoirs et maisons de pierre du Quercy conservent mobilier d’époque, tapisseries, orfèvrerie et collections de famille.' },
  { num: '48', slug: 'lozere-48', name: 'Lozère', in: 'en Lozère', region: 'occitanie', pref: 'Mende', cities: ['Mende', 'Florac', 'Marvejols', 'Langogne', 'Saint-Chély-d’Apcher'], img: 'mende', place: 'Mende et sa cathédrale', heritage: 'Mas cévenols, demeures de Mende et fermes des Causses abritent mobilier rustique, objets de culte et pièces d’art populaire.' },
  { num: '65', slug: 'hautes-pyrenees-65', name: 'Hautes-Pyrénées', in: 'dans les Hautes-Pyrénées', region: 'occitanie', pref: 'Tarbes', cities: ['Tarbes', 'Lourdes', 'Bagnères-de-Bigorre', 'Argelès-Gazost', 'Lannemezan'], img: 'gavarnie', place: 'Cirque de Gavarnie', heritage: 'Villas thermales de Bagnères, demeures bigourdanes et maisons de montagne renferment mobilier pyrénéen, bijoux et objets de piété.' },
  { num: '66', slug: 'pyrenees-orientales-66', name: 'Pyrénées-Orientales', in: 'dans les Pyrénées-Orientales', region: 'occitanie', pref: 'Perpignan', cities: ['Perpignan', 'Collioure', 'Céret', 'Prades', 'Banyuls-sur-Mer', 'Argelès-sur-Mer'], img: 'collioure', place: 'Collioure et son clocher', heritage: 'Demeures catalanes, maisons de Céret et villas de la Côte Vermeille conservent mobilier catalan, céramiques, tableaux modernes et objets d’art.' },
  { num: '81', slug: 'tarn-81', name: 'Tarn', in: 'dans le Tarn', region: 'occitanie', pref: 'Albi', cities: ['Albi', 'Castres', 'Gaillac', 'Mazamet', 'Lavaur', 'Graulhet'], img: 'albi', place: 'Cathédrale Sainte-Cécile d’Albi', heritage: 'Hôtels albigeois, demeures de Castres et domaines gaillacois abritent mobilier toulousain, orfèvrerie, peintures et objets de collection.' },
  { num: '82', slug: 'tarn-et-garonne-82', name: 'Tarn-et-Garonne', in: 'dans le Tarn-et-Garonne', region: 'occitanie', pref: 'Montauban', cities: ['Montauban', 'Castelsarrasin', 'Moissac', 'Caussade', 'Valence-d’Agen'], img: 'montauban', place: 'Pont Vieux de Montauban', heritage: 'Hôtels montalbanais et demeures de la vallée du Tarn recèlent mobilier de brique et de pierre, peintures, argenterie et objets d’art.' },
];

export const region = (slug: string) => REGIONS.find((r) => r.slug === slug)!;
export const deptsOf = (r: RegionSlug) => DEPTS.filter((d) => d.region === r);
export const FEATURED = DEPTS.filter((d) => d.featured);
export const zoneUrl = (slug: string) => `/zones-intervention/${slug}/`;

/** Longueur cible : title 50–60 caractères, description 140–155. */
export function fitText(base: string, extras: string[], min: number, max: number) {
  let t = base;
  for (const e of extras) if (t.length < min && (t + e).length <= max) t += e;
  return t;
}
