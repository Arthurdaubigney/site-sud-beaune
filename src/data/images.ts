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
  'tableau-paysage': { alt: 'Tableau ancien : paysage de colline avec maisons et ciel nuageux par Camille Pissarro, huile sur toile', title: 'Paysage de Pissarro – expertise de tableaux et de peintures anciennes' },
  'bordeaux-bourse': { alt: 'Place de la Bourse et miroir d’eau à Bordeaux, antiquaire expert en Gironde', title: 'Bordeaux, place de la Bourse – antiquaire expert en Gironde' },
  'bordeaux-gravure': { alt: 'Vue cavalière ancienne de Bordeaux et de la Garonne, gravure de Hugo d’Alesi, patrimoine bordelais', title: 'Vue cavalière de Bordeaux, 1899 – patrimoine et antiquités en Gironde' },
  'biarritz': { alt: 'Grande Plage de Biarritz et son casino, Pays basque, zone d’intervention de nos antiquaires', title: 'Biarritz, Grande Plage – antiquaire expert au Pays basque' },
  'perigord-chateau': { alt: 'Château du Périgord noir entouré de verdure en Dordogne, patrimoine mobilier à expertiser', title: 'Château en Périgord noir – estimation et rachat d’antiquités en Dordogne' },
  'vezere': { alt: 'Vallée de la Vézère en Dordogne depuis la Roque Saint-Christophe, antiquaire expert en Périgord', title: 'Vallée de la Vézère – antiquaire expert en Périgord' },
  'la-rochelle': { alt: 'Vieux port et tours de La Rochelle vus du ciel, antiquaire expert en Périgord', title: 'La Rochelle, vieux port – antiquaire expert en Charente-Maritime' },
  'nimes': { alt: 'Porte Auguste à Nîmes, rempart romain, Gard : zone d’intervention de nos antiquaires', title: 'Nîmes, porte Auguste – antiquaire expert dans le Gard' },
  'pays-basque': { alt: 'Falaise verdoyante et plage du Pays basque près de Biarritz, antiquaire expert au Pays basque', title: 'Côte basque – antiquaire expert dans les Pyrénées-Atlantiques et les Landes' },
  'toulouse': { alt: 'Place du Capitole à Toulouse, antiquaire expert en Haute-Garonne et en Occitanie', title: 'Toulouse, place du Capitole – antiquaire expert en Occitanie' },
  'carcassonne': { alt: 'Cité de Carcassonne illuminée au crépuscule, antiquaire expert dans l’Aude', title: 'Carcassonne illuminée – antiquaire expert dans l’Aude' },
  'albi': { alt: 'Cathédrale Sainte-Cécile d’Albi en brique rose, antiquaire expert dans le Tarn', title: 'Albi, cathédrale Sainte-Cécile – antiquaire expert dans le Tarn' },
  'limoges': { alt: 'Gare de Limoges-Bénédictins et son jet d’eau, antiquaire expert en Haute-Vienne', title: 'Limoges, gare des Bénédictins – antiquaire expert en Haute-Vienne' },
  'poitiers': { alt: 'Sculpture romane de Notre-Dame-la-Grande à Poitiers, antiquaire expert dans la Vienne', title: 'Poitiers, Notre-Dame-la-Grande – antiquaire expert dans la Vienne' },
  'pau': { alt: 'Salon du château de Pau avec tapisserie et bronze, antiquaire expert à Pau', title: 'Château de Pau – antiquaire expert dans les Pyrénées-Atlantiques' },
  'collioure': { alt: 'Collioure, son clocher et sa baie, antiquaire expert dans les Pyrénées-Orientales', title: 'Collioure – antiquaire expert dans les Pyrénées-Orientales' },
  'rocamadour': { alt: 'Village de Rocamadour accroché à la falaise, antiquaire expert dans le Lot', title: 'Rocamadour – antiquaire expert dans le Lot' },
  'cahors': { alt: 'Pont Valentré à Cahors, antiquaire expert dans le Lot et le Tarn-et-Garonne', title: 'Cahors, pont Valentré – antiquaire expert dans le Lot' },
  'gavarnie': { alt: 'Cirque de Gavarnie dans les Pyrénées, antiquaire expert dans les Hautes-Pyrénées et l’Ariège', title: 'Pyrénées, cirque de Gavarnie – antiquaire expert dans les Hautes-Pyrénées' },
  'montpellier': { alt: 'Place de la Comédie et opéra de Montpellier, antiquaire expert dans l’Hérault', title: 'Montpellier, place de la Comédie – antiquaire expert dans l’Hérault' },
  'agen': { alt: 'Toits et maisons à colombages d’Agen, antiquaire expert dans le Lot-et-Garonne et le Gers', title: 'Agen – antiquaire expert dans le Lot-et-Garonne' },
  'hero-urtubie': { alt: 'Salon d’un château du Pays basque avec tapisserie, pendule comtoise et mobilier ancien', title: 'Salon de château du Pays basque – antiquités et mobilier ancien' },
  'bibliotheque-chateau': { alt: 'Bibliothèque de château avec boiseries, globe terrestre et fauteuils anciens', title: 'Bibliothèque de château – livres anciens et mobilier d’époque' },
  'salle-chateau': { alt: 'Grande salle de château avec tapisserie, armes anciennes et coffres sculptés', title: 'Salle de château – tapisseries, armes et mobilier ancien' },
  'cabinet-curiosites': { alt: 'Cabinet de curiosités avec pupitres, livres anciens et sphère armillaire dans un manoir en brique', title: 'Cabinet de curiosités – livres anciens et instruments scientifiques' },
  'boutique-antiquites': { alt: 'Intérieur d’une boutique d’antiquités sous charpente : tables, vitrines, lampes et objets de brocante', title: 'Boutique d’antiquités – mobilier et objets de brocante de charme' },
  'saint-emilion': { alt: "Place et toits du village de Saint-Émilion en Gironde, antiquaire expert en Gironde", title: "Saint-Émilion – antiquaire expert en Gironde" },
  'sarlat': { alt: "Place de la Liberté à Sarlat-la-Canéda avec ses façades dorées, antiquaire expert en Dordogne", title: "Sarlat-la-Canéda – antiquaire expert en Dordogne" },
  'narbonne': { alt: "Cathédrale Saint-Just et Saint-Pasteur de Narbonne dominant les toits, antiquaire expert dans l’Aude", title: "Narbonne – antiquaire expert dans l’Aude" },
  'foix': { alt: "Château de Foix perché au-dessus de la ville, antiquaire expert en Ariège", title: "Château de Foix – antiquaire expert en Ariège" },
  'conques': { alt: "Village et abbatiale Sainte-Foy de Conques, antiquaire expert en Aveyron", title: "Conques – antiquaire expert en Aveyron" },
  'millau': { alt: "Ville de Millau et son viaduc dans les Grands Causses, antiquaire expert en Aveyron", title: "Millau et son viaduc – antiquaire expert en Aveyron" },
  'perpignan': { alt: "Toits et rues de Perpignan en Catalogne, antiquaire expert dans les Pyrénées-Orientales", title: "Perpignan – antiquaire expert dans les Pyrénées-Orientales" },
  'cognac': { alt: "Logis et jardin de Cognac en Charente, antiquaire expert en Charente", title: "Cognac – antiquaire expert en Charente" },
  'rochefort': { alt: "Corderie royale de Rochefort et sa pelouse, antiquaire expert en Charente-Maritime", title: "Rochefort, Corderie royale – antiquaire expert en Charente-Maritime" },
  'pilat': { alt: "Dune du Pilat face au Bassin d’Arcachon, antiquaire expert en Gironde", title: "Dune du Pilat – antiquaire expert en Gironde" },
  'niort': { alt: "Donjon de Niort dans les Deux-Sèvres, antiquaire expert dans les Deux-Sèvres", title: "Donjon de Niort – antiquaire expert dans les Deux-Sèvres" },
  'montauban': { alt: "Pont Vieux sur le Tarn à Montauban, antiquaire expert dans le Tarn-et-Garonne", title: "Montauban, Pont Vieux – antiquaire expert dans le Tarn-et-Garonne" },
  'mende': { alt: "Vue aérienne de Mende et de sa cathédrale en Lozère, antiquaire expert en Lozère", title: "Mende – antiquaire expert en Lozère" },
  'nerac': { alt: "Château de Nérac et sa galerie à arcades dans le Lot-et-Garonne, antiquaire expert dans le Lot-et-Garonne", title: "Château de Nérac – antiquaire expert dans le Lot-et-Garonne" },
  'villeneuve': { alt: "Pont Vieux de Villeneuve-sur-Lot au-dessus du Lot, antiquaire expert dans le Lot-et-Garonne", title: "Villeneuve-sur-Lot – antiquaire expert dans le Lot-et-Garonne" },
  'auch': { alt: "Escalier monumental et fontaine d’Auch dans le Gers, antiquaire expert dans le Gers", title: "Auch, escalier monumental – antiquaire expert dans le Gers" },
  'fourrure': { alt: "Manteau de fourrure gris à poil long sur un cintre, manteau de vison à estimer", title: "Manteau de fourrure – estimation et rachat de manteaux de vison, astrakan, renard" },
  'monnaies': { alt: "Collection de pièces de monnaie grecques anciennes en argent présentées à plat", title: "Pièces de monnaie anciennes – estimation de collections numismatiques" },
  'pieces-or': { alt: "Pièce en or de 20 francs Napoléon, avers et revers, pièce d’investissement ancienne", title: "Pièce de 20 francs or Napoléon – rachat de pièces en or anciennes" },
  'medailles': { alt: "Médaille militaire française avec son ruban jaune et vert, décoration ancienne à estimer", title: "Médaille militaire et décorations – rachat de médailles anciennes" },
  'verrerie-art': { alt: "Vase en verre soufflé de Gallé rouge et noir à décor végétal, verrerie Art nouveau", title: "Vase Gallé Art nouveau – estimation de verrerie d’art et pâte de verre" },
  'livres-anciens': { alt: "Gros livre ancien à reliure de parchemin posé de profil, livre ancien à faire expertiser", title: "Livre ancien à reliure de parchemin – estimation de livres anciens" },
  'cartes-postales': { alt: "Collage de cartes postales anciennes de rues et de villages en noir et blanc", title: "Cartes postales anciennes – estimation de collections cartophiles" },
  'art-asiatique': { alt: "Vase cornet en porcelaine chinoise bleu et blanc, art asiatique ancien à estimer", title: "Porcelaine chinoise bleu et blanc – estimation d’art asiatique" },
  'instruments-marine': { alt: "Sextant ancien en laiton et bois, instrument de navigation de marine à estimer", title: "Sextant ancien – estimation d’instruments de marine et scientifiques" },
  'montres-collection': { alt: "Montre Rolex vintage à bracelet toile, montre de collection à estimer", title: "Montre Rolex vintage – estimation et rachat de montres de collection" },
  'pendule-salon': { alt: "Pendule dorée sur cheminée de marbre entre deux candélabres, salon ancien", title: "Pendule de cheminée en bronze doré – estimation de pendules anciennes" },
  'design-vintage': { alt: "Fauteuil bas en contreplaqué moulé de design américain du milieu du XXe siècle", title: "Fauteuil design vintage – estimation de mobilier du XXe siècle" },
  'ales': { alt: "Vue sur la ville d’Alès et les Cévennes, antiquaire expert dans le Gard", title: "Alès – antiquaire expert dans le Gard" },
  'aigues-mortes': { alt: "Remparts d’Aigues-Mortes dans le Gard, antiquaire expert dans le Gard", title: "Aigues-Mortes, remparts – antiquaire expert dans le Gard" },
  'armoire-ancienne': { alt: "Armoire ancienne en bois clair dans une pièce en pierre, mobilier ancien à estimer", title: "Armoire ancienne – estimation de mobilier ancien" },
  'bague-ancienne': { alt: "Bague ancienne en platine sertie d’un diamant et de saphirs, bijou ancien à estimer", title: "Bague ancienne en platine – estimation de bijoux anciens" },
  'bayonne': { alt: "Quais de la Nive et maisons colorées de Bayonne, antiquaire expert dans les Pyrénées-Atlantiques", title: "Bayonne, les quais – antiquaire expert au Pays basque" },
  'bergerac': { alt: "Bergerac et la Dordogne au coucher du soleil, antiquaire expert en Dordogne", title: "Bergerac – antiquaire expert en Dordogne" },
  'beynac': { alt: "Château de Beynac dominant la vallée de la Dordogne, antiquaire expert en Périgord", title: "Beynac – antiquaire expert en Dordogne" },
  'beziers': { alt: "Pont Vieux et cathédrale Saint-Nazaire de Béziers, antiquaire expert dans l’Hérault", title: "Béziers – antiquaire expert dans l’Hérault" },
  'brantome': { alt: "Abbaye de Brantôme au bord de la Dronne en Dordogne, antiquaire expert en Périgord", title: "Brantôme – antiquaire expert en Dordogne" },
  'brive': { alt: "Hôtel de ville de Brive-la-Gaillarde en Corrèze, antiquaire expert en Corrèze", title: "Brive-la-Gaillarde – antiquaire expert en Corrèze" },
  'bureau-louis-xv': { alt: "Bureau plat d’époque Louis XV en bois noirci et bronzes dorés, mobilier ancien à estimer", title: "Bureau plat Louis XV – estimation de mobilier ancien" },
  'cap-ferret': { alt: "Intérieur de l’escalier du phare du Cap Ferret en Gironde, antiquaire expert à Arcachon", title: "Phare du Cap Ferret – antiquaire expert en Gironde" },
  'castres': { alt: "Maisons colorées au bord de l’Agout à Castres, antiquaire expert dans le Tarn", title: "Castres, l’Agout – antiquaire expert dans le Tarn" },
  'chauvigny': { alt: "Château de Chauvigny dans la Vienne, antiquaire expert dans la Vienne", title: "Chauvigny – antiquaire expert dans la Vienne" },
  'collonges': { alt: "Village de Collonges-la-Rouge en grès rouge, antiquaire expert en Corrèze", title: "Collonges-la-Rouge – antiquaire expert en Corrèze" },
  'confolens': { alt: "Vieux pont de Confolens sur la Vienne, antiquaire expert en Charente", title: "Confolens – antiquaire expert en Charente" },
  'cordes-sur-ciel': { alt: "Vue aérienne de Cordes-sur-Ciel dans le Tarn, antiquaire expert dans le Tarn", title: "Cordes-sur-Ciel – antiquaire expert dans le Tarn" },
  'eventail': { alt: "Éventail ancien en nacre et ivoire replié, objet de vitrine à estimer", title: "Éventail ancien – estimation d’objets de vitrine" },
  'figeac': { alt: "Maison de ville ancienne à Figeac dans le Lot, antiquaire expert dans le Lot", title: "Figeac – antiquaire expert dans le Lot" },
  'gueret': { alt: "Hôtel de ville de Guéret dans la Creuse, antiquaire expert dans la Creuse", title: "Guéret – antiquaire expert dans la Creuse" },
  'hendaye': { alt: "Rocher et côte basque à Hendaye, antiquaire expert au Pays basque", title: "Hendaye – antiquaire expert au Pays basque" },
  'horloges-comtoises': { alt: "Rangée d’horloges comtoises anciennes en bois rouge, horlogerie ancienne à estimer", title: "Horloges comtoises – estimation d’horlogerie ancienne" },
  'ile-de-re': { alt: "Port de plaisance de l’île de Ré, antiquaire expert en Charente-Maritime", title: "Île de Ré – antiquaire expert en Charente-Maritime" },
  'jarnac': { alt: "Bateau sur la Charente à Jarnac, antiquaire expert en Charente", title: "Jarnac – antiquaire expert en Charente" },
  'la-rochefoucauld': { alt: "Rue et façades de La Rochefoucauld en Charente, antiquaire expert en Charente", title: "La Rochefoucauld – antiquaire expert en Charente" },
  'lectoure': { alt: "Architecture ancienne de Lectoure dans le Gers, antiquaire expert dans le Gers", title: "Lectoure – antiquaire expert dans le Gers" },
  'gorges-du-tarn': { alt: "Village dans les gorges du Tarn en Lozère, antiquaire expert en Lozère", title: "Gorges du Tarn – antiquaire expert en Lozère" },
  'mirepoix': { alt: "Couverts de la place de Mirepoix en Ariège, antiquaire expert en Ariège", title: "Mirepoix – antiquaire expert en Ariège" },
  'moissac': { alt: "Galeries du cloître de l’abbaye de Moissac, antiquaire expert dans le Tarn-et-Garonne", title: "Moissac, le cloître – antiquaire expert dans le Tarn-et-Garonne" },
  'oloron': { alt: "Portail roman de l’église Sainte-Marie d’Oloron, antiquaire expert dans les Pyrénées-Atlantiques", title: "Oloron-Sainte-Marie – antiquaire expert en Béarn" },
  'pezenas': { alt: "Portes anciennes d’une rue de Pézenas dans l’Hérault, antiquaire expert dans l’Hérault", title: "Pézenas – antiquaire expert dans l’Hérault" },
  'robe-vintage': { alt: "Robe du soir ancienne sur mannequin, vêtement vintage et haute couture à estimer", title: "Robe vintage – estimation de vêtements haute couture" },
  'rodez': { alt: "Façade de la cathédrale de Rodez en Aveyron, antiquaire expert en Aveyron", title: "Rodez – antiquaire expert en Aveyron" },
  'saint-cirq-lapopie': { alt: "Village perché de Saint-Cirq-Lapopie dans le Lot, antiquaire expert dans le Lot", title: "Saint-Cirq-Lapopie – antiquaire expert dans le Lot" },
  'saintes': { alt: "Arc de Germanicus et la Charente à Saintes, antiquaire expert en Charente-Maritime", title: "Saintes – antiquaire expert en Charente-Maritime" },
  'service-porcelaine': { alt: "Coupe en porcelaine blanche à décor rocaille, porcelaine ancienne à estimer", title: "Porcelaine blanche – estimation de services et de pièces anciennes" },
  'sete': { alt: "Barques catalanes sur le canal de Sète, antiquaire expert dans l’Hérault", title: "Sète – antiquaire expert dans l’Hérault" },
  'thouars': { alt: "Château de Thouars et ses jardins dans les Deux-Sèvres, antiquaire expert dans les Deux-Sèvres", title: "Thouars – antiquaire expert dans les Deux-Sèvres" },
  'angouleme': { alt: 'Hôtel de ville d’Angoulême et son parc fleuri, antiquaire expert en Charente', title: 'Angoulême, hôtel de ville – antiquaire expert en Charente' },
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

/** Point focal des photos (object-position) : évite que le sujet soit coupé quand le cadre change de format. */
const FOCUS: Record<string, string> = {
  'commode-wallace': '50% 40%', 'commode-louis-xv': '50% 45%', 'pendule-xviii': '50% 38%', 'fourrure': '50% 30%',
  'robe-vintage': '50% 28%', 'bronze-sculpture': '50% 30%', 'montres-collection': '50% 40%', 'vase-porcelaine': '50% 42%',
  'marqueterie-boulle': '50% 42%', 'pays-basque': '50% 35%', 'tableau-corot': '50% 45%', 'montre-gousset': '50% 45%',
  'cartes-postales': '50% 35%', 'art-asiatique': '50% 38%', 'design-vintage': '50% 45%', 'pieces-or': '50% 50%',
};
export const focus = (key: string) => FOCUS[key] ?? '50% 50%';
