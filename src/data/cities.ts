/**
 * Pages locales : une page par grande ville pour capter les recherches « antiquaire + ville »
 * et « rachat succession + ville ». Contenu rédigé localement, sans texte dupliqué d'une ville à l'autre.
 */
export type City = {
  slug: string;
  name: string;
  prep: string; // « à Bordeaux », « au Pays basque »…
  dep: string; // slug du département
  img: string;
  place: string;
  intro: string;
  heritage: string[];
  objects: string[];
  nearby: string[];
};

export const CITIES: City[] = [
  { slug: 'antiquaire-bordeaux', name: 'Bordeaux', prep: 'à Bordeaux', dep: 'gironde-33', img: 'bordeaux-bourse', place: 'place de la Bourse à Bordeaux',
    intro: 'Les Chartrons, Saint-Pierre, le Triangle d’or, Saint-Seurin ou Caudéran : nous nous déplaçons dans tous les quartiers de Bordeaux pour estimer et racheter mobilier ancien, tableaux, bronzes et objets d’art.',
    heritage: ['Port de commerce atlantique, Bordeaux a vu passer au XVIIIe siècle l’acajou des Antilles, les porcelaines de la Compagnie des Indes et les pendules d’armateurs. On les retrouve aujourd’hui dans les échoppes, les hôtels de négociants des Chartrons et les appartements haussmanniens du centre.', 'Les successions bordelaises sont souvent riches en bronzes dorés, en cartels, en argenterie de table et en tableaux du XIXe siècle.'],
    objects: ['Acajou et mobilier de négociant', 'Pendules et bronzes dorés', 'Argenterie et cristal', 'Tableaux et gravures de Bordeaux'], nearby: ['Mérignac', 'Pessac', 'Talence', 'Bègles', 'Le Bouscat', 'Libourne'] },
  { slug: 'antiquaire-toulouse', name: 'Toulouse', prep: 'à Toulouse', dep: 'haute-garonne-31', img: 'toulouse', place: 'place du Capitole à Toulouse',
    intro: 'Du Capitole aux Carmes, de Saint-Cyprien à Saint-Étienne : nous intervenons dans toute l’agglomération toulousaine pour l’estimation et le rachat d’antiquités, de meubles anciens et d’objets d’art.',
    heritage: ['La ville rose conserve de nombreux hôtels particuliers bâtis grâce à la fortune du pastel à la Renaissance, puis des demeures du XVIIIe et du XIXe siècle. Leurs intérieurs recèlent du mobilier d’apparat, des tableaux, des bronzes et des pendules.', 'Les héritiers toulousains nous contactent souvent pour des successions d’appartements en centre-ville comme de maisons de la périphérie.'],
    objects: ['Mobilier d’apparat et sièges', 'Tableaux anciens', 'Pendules et bronzes', 'Argenterie et bijoux'], nearby: ['Blagnac', 'Colomiers', 'Tournefeuille', 'Muret', 'Balma', 'L’Union'] },
  { slug: 'antiquaire-montpellier', name: 'Montpellier', prep: 'à Montpellier', dep: 'herault-34', img: 'montpellier', place: 'place de la Comédie à Montpellier',
    intro: 'Dans l’Écusson, aux Arceaux, au Peyrou ou dans les communes voisines, nous nous déplaçons gratuitement pour estimer et racheter vos meubles anciens, tableaux, bijoux et objets d’art à Montpellier.',
    heritage: ['Les hôtels particuliers de l’Écusson et les maisons de maître des environs abritent mobilier languedocien, faïences, argenterie et peintures. La proximité de Sète, de Pézenas et du littoral enrichit encore le patrimoine mobilier de la région.'],
    objects: ['Mobilier languedocien', 'Faïences et porcelaines', 'Argenterie et bijoux', 'Tableaux et gravures'], nearby: ['Castelnau-le-Lez', 'Lattes', 'Juvignac', 'Sète', 'Pézenas', 'Lunel'] },
  { slug: 'antiquaire-biarritz', name: 'Biarritz', prep: 'à Biarritz', dep: 'pyrenees-atlantiques-64', img: 'biarritz', place: 'Grande Plage de Biarritz',
    intro: 'Villas Belle Époque, appartements face à l’océan, résidences secondaires : nous estimons et rachetons le contenu des maisons de Biarritz, d’Anglet, de Bidart et de toute la côte basque.',
    heritage: ['Station balnéaire prisée des cours européennes au XIXe siècle, Biarritz a conservé des villas dont les intérieurs mêlent mobilier de style, bronzes, argenterie, tableaux et objets de voyage. Les successions de résidences secondaires, parfois fermées une partie de l’année, demandent de la discrétion et de la souplesse.'],
    objects: ['Mobilier de villa', 'Argenterie et cristal', 'Tableaux et affiches anciennes', 'Bijoux et montres'], nearby: ['Anglet', 'Bidart', 'Guéthary', 'Saint-Jean-de-Luz', 'Hendaye', 'Ustaritz'] },
  { slug: 'antiquaire-bayonne', name: 'Bayonne', prep: 'à Bayonne', dep: 'pyrenees-atlantiques-64', img: 'pays-basque', place: 'côte basque près de Bayonne',
    intro: 'Grand Bayonne, Petit Bayonne, Saint-Esprit ou communes de l’Adour : nous nous déplaçons pour estimer et racheter vos antiquités, du mobilier basque aux objets d’art.',
    heritage: ['Entre arcades, remparts de Vauban et maisons à colombages, Bayonne a gardé des intérieurs où se côtoient coffres sculptés, mobilier régional, faïences, linge basque et orfèvrerie religieuse.'],
    objects: ['Mobilier basque et coffres', 'Argenterie et orfèvrerie', 'Faïences', 'Tableaux de l’école basque'], nearby: ['Anglet', 'Boucau', 'Saint-Pierre-d’Irube', 'Biarritz', 'Peyrehorade', 'Dax'] },
  { slug: 'antiquaire-pau', name: 'Pau', prep: 'à Pau', dep: 'pyrenees-atlantiques-64', img: 'pau', place: 'salon du château de Pau',
    intro: 'Au centre de Pau, sur le boulevard des Pyrénées, à Jurançon ou à Lescar, nous estimons et rachetons meubles anciens, tableaux, bijoux et objets d’art, avec visite gratuite à domicile.',
    heritage: ['Au XIXe siècle, la colonie britannique a laissé à Pau de nombreuses villas, et l’histoire du château d’Henri IV a nourri un goût durable pour les tapisseries, les bronzes et le mobilier d’époque. Les successions paloises sont souvent riches en objets d’art et en livres.'],
    objects: ['Mobilier béarnais et d’époque', 'Tapisseries et textiles', 'Bronzes et pendules', 'Livres et tableaux'], nearby: ['Jurançon', 'Billère', 'Lescar', 'Gelos', 'Oloron-Sainte-Marie', 'Tarbes'] },
  { slug: 'antiquaire-perigueux', name: 'Périgueux', prep: 'à Périgueux', dep: 'dordogne-24', img: 'perigueux', place: 'cathédrale Saint-Front de Périgueux',
    intro: 'Dans le Puy-Saint-Front, à Trélissac, Boulazac ou dans le reste du Périgord : nous nous déplaçons pour estimer et racheter vos meubles anciens, tableaux, bijoux et objets de collection.',
    heritage: ['Entre la cathédrale Saint-Front et les hôtels de la Renaissance, Périgueux et son agglomération abritent du mobilier de campagne, des armoires périgourdines, de l’orfèvrerie et des livres anciens. La vallée de l’Isle et le Périgord blanc conservent de nombreuses gentilhommières.'],
    objects: ['Mobilier de gentilhommière', 'Armoires et buffets périgourdins', 'Argenterie et livres anciens', 'Tableaux de famille'], nearby: ['Trélissac', 'Boulazac', 'Chancelade', 'Brantôme', 'Bergerac', 'Sarlat-la-Canéda'] },
  { slug: 'antiquaire-la-rochelle', name: 'La Rochelle', prep: 'à La Rochelle', dep: 'charente-maritime-17', img: 'la-rochelle', place: 'vieux port de La Rochelle',
    intro: 'Vieux port, quartier de la Rue du Palais, île de Ré ou Aytré : nous estimons et rachetons meubles, instruments de marine, tableaux et objets d’art à La Rochelle et dans toute l’agglomération.',
    heritage: ['Ancien port d’armateurs, La Rochelle a gardé des intérieurs où l’on trouve des cartes marines, des instruments de navigation, des meubles de bord, de la faïence, des porcelaines venues d’Asie et des tableaux de marine.'],
    objects: ['Marine et instruments de navigation', 'Mobilier d’armateur', 'Faïences et porcelaines', 'Tableaux de marine'], nearby: ['Aytré', 'Lagord', 'Périgny', 'Île de Ré', 'Rochefort', 'Châtelaillon-Plage'] },
  { slug: 'antiquaire-angouleme', name: 'Angoulême', prep: 'à Angoulême', dep: 'charente-16', img: 'angouleme', place: 'hôtel de ville d’Angoulême',
    intro: 'Haute ville, rempart, quartiers de L’Houmeau et de Saint-Cybard, Soyaux ou La Couronne : nous nous déplaçons pour estimer et racheter antiquités et objets d’art à Angoulême.',
    heritage: ['Perchée sur son éperon, Angoulême conserve des hôtels particuliers, des demeures de papetiers et des maisons bourgeoises dont les intérieurs réunissent mobilier de noyer, tableaux, argenterie et livres anciens.'],
    objects: ['Mobilier charentais', 'Argenterie', 'Tableaux et gravures', 'Livres anciens'], nearby: ['Soyaux', 'La Couronne', 'Gond-Pontouvre', 'Cognac', 'Jarnac', 'Barbezieux'] },
  { slug: 'antiquaire-limoges', name: 'Limoges', prep: 'à Limoges', dep: 'haute-vienne-87', img: 'limoges', place: 'gare de Limoges-Bénédictins',
    intro: 'Quartier de la Boucherie, Cathédrale, Beaublanc ou communes voisines : nous estimons et rachetons à domicile vos porcelaines, émaux, meubles anciens et objets d’art à Limoges.',
    heritage: ['Capitale de la porcelaine et des émaux, Limoges est un territoire où l’on trouve des services complets, des vases décorés à la main, des pièces de manufactures et des émaux anciens, à côté d’un riche mobilier limousin.'],
    objects: ['Porcelaines de Limoges', 'Émaux', 'Mobilier limousin', 'Argenterie et cristal'], nearby: ['Panazol', 'Couzeix', 'Isle', 'Feytiat', 'Saint-Junien', 'Saint-Yrieix-la-Perche'] },
  { slug: 'antiquaire-poitiers', name: 'Poitiers', prep: 'à Poitiers', dep: 'vienne-86', img: 'poitiers', place: 'Notre-Dame-la-Grande à Poitiers',
    intro: 'Centre historique, Saint-Éloi, Buxerolles ou Migné-Auxances : nous estimons et rachetons vos meubles anciens, sculptures, tableaux et objets d’art à Poitiers et dans toute la Vienne.',
    heritage: ['Poitiers possède un exceptionnel patrimoine roman et des hôtels particuliers de la Renaissance. Les intérieurs poitevins comptent du mobilier de campagne, des sculptures, des objets religieux, des pendules et de l’argenterie.'],
    objects: ['Mobilier poitevin', 'Sculptures et objets religieux', 'Pendules', 'Argenterie'], nearby: ['Buxerolles', 'Migné-Auxances', 'Châtellerault', 'Chauvigny', 'Niort', 'Loudun'] },
  { slug: 'antiquaire-nimes', name: 'Nîmes', prep: 'à Nîmes', dep: 'gard-30', img: 'nimes', place: 'Porte Auguste à Nîmes',
    intro: 'Écusson, quartier des Arènes, Carré d’Art ou mas des alentours : nous nous déplaçons pour estimer et racheter meubles provençaux et languedociens, faïences, bijoux et objets d’art à Nîmes.',
    heritage: ['Entre hôtels particuliers de l’Écusson et mas de la garrigue, Nîmes et son département conservent mobilier provençal, argenterie, faïences, tableaux de l’école de Nîmes et pièces de textile. Uzès et Alès ajoutent leurs propres demeures.'],
    objects: ['Mobilier provençal', 'Faïences', 'Argenterie et bijoux', 'Tableaux régionaux'], nearby: ['Caveirac', 'Marguerittes', 'Uzès', 'Alès', 'Beaucaire', 'Aigues-Mortes'] },
  { slug: 'antiquaire-perpignan', name: 'Perpignan', prep: 'à Perpignan', dep: 'pyrenees-orientales-66', img: 'perpignan', place: 'toits de Perpignan',
    intro: 'Quartier Saint-Jacques, Castillet, Saint-Gaudérique ou Canet : nous estimons et rachetons à domicile meubles catalans, céramiques, tableaux et objets d’art à Perpignan et dans les Pyrénées-Orientales.',
    heritage: ['La Catalogne du Nord a laissé un patrimoine mobilier original : coffres peints, meubles de montagne, céramiques, orfèvrerie et peintures de Céret ou de Collioure. Les successions perpignanaises réservent souvent de belles surprises.'],
    objects: ['Mobilier catalan', 'Céramiques', 'Peintures modernes et régionales', 'Bijoux et orfèvrerie'], nearby: ['Canet-en-Roussillon', 'Cabestany', 'Rivesaltes', 'Collioure', 'Céret', 'Prades'] },
  { slug: 'antiquaire-albi', name: 'Albi', prep: 'à Albi', dep: 'tarn-81', img: 'albi', place: 'cathédrale Sainte-Cécile d’Albi',
    intro: 'Dans la cité épiscopale, à Castelnau-de-Lévis, Lescure ou Cordes-sur-Ciel : nous estimons et rachetons vos antiquités, meubles et objets d’art à Albi et dans tout le Tarn.',
    heritage: ['Albi, cité de brique, abrite des demeures de marchands et des hôtels où l’on trouve du mobilier toulousain, de l’orfèvrerie, des peintures et des objets liés à l’histoire locale. Gaillac et Castres ajoutent leurs maisons de vignerons et de notables.'],
    objects: ['Mobilier de brique et de pierre', 'Orfèvrerie', 'Peintures', 'Livres et objets de collection'], nearby: ['Lescure-d’Albigeois', 'Saint-Juéry', 'Gaillac', 'Castres', 'Cordes-sur-Ciel', 'Carmaux'] },
  { slug: 'antiquaire-cognac', name: 'Cognac', prep: 'à Cognac', dep: 'charente-16', img: 'cognac', place: 'logis et jardin de Cognac',
    intro: 'Logis, maisons de négociants, domaines viticoles de Cognac, Jarnac ou Segonzac : nous estimons et rachetons le mobilier ancien, l’argenterie et les objets d’art des demeures du Cognaçais.',
    heritage: ['Les maisons de négoce et les logis charentais de la région de Cognac ont conservé des intérieurs soignés : mobilier de noyer, pendules, argenterie armoriée, tableaux de famille et objets liés à la tonnellerie et au commerce des eaux-de-vie.'],
    objects: ['Mobilier de noyer', 'Argenterie armoriée', 'Pendules', 'Tableaux de famille'], nearby: ['Jarnac', 'Segonzac', 'Châteaubernard', 'Saint-Jean-d’Angély', 'Barbezieux-Saint-Hilaire', 'Saintes'] },
  { slug: 'antiquaire-arcachon', name: 'Arcachon', prep: 'à Arcachon', dep: 'gironde-33', img: 'pilat', place: 'dune du Pilat face au Bassin d’Arcachon',
    intro: 'Ville d’Hiver, Moulleau, Pyla-sur-Mer ou Cap Ferret : nous estimons et rachetons le contenu des villas du Bassin d’Arcachon, du mobilier balnéaire aux objets d’art, avec discrétion.',
    heritage: ['Station née au XIXe siècle, Arcachon a conservé des villas de style balnéaire dont les intérieurs combinent mobilier de villégiature, argenterie, tableaux de marine, bijoux et objets de voyage. Beaucoup sont des résidences secondaires, au contenu parfois jamais inventorié.'],
    objects: ['Mobilier de villégiature', 'Tableaux de marine', 'Argenterie et bijoux', 'Objets de voyage'], nearby: ['Le Moulleau', 'Pyla-sur-Mer', 'La Teste-de-Buch', 'Gujan-Mestras', 'Andernos-les-Bains', 'Lège-Cap-Ferret'] },
];

export const city = (slug: string) => CITIES.find((c) => c.slug === slug)!;
