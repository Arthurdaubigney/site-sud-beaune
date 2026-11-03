/**
 * Configuration centrale du site. Tout ce qui est à personnaliser avant la
 * mise en ligne (nom, domaine, formulaire Tally, coordonnées) se trouve ici.
 */
export const SITE = {
  name: "Maisons d'Antiquaires du Sud-Ouest",
  short: 'Maisons du Sud-Ouest',
  wordmark: 'Maisons du Sud-Ouest',
  url: 'https://www.maisons-antiquaires-sud-ouest.fr',
  locale: 'fr_FR',
  /** Identifiant du formulaire Tally (https://tally.so/r/<ID>). Vide = placeholder affiché. */
  tallyId: '',
  /** Coordonnées : laisser vide tant qu'elles ne sont pas confirmées (elles alimentent le JSON-LD). */
  phone: '',
  email: '',
  foundingNote: 'Experts en objets d’art et antiquités depuis plusieurs générations',
};

export const ESTIMATION_URL = '/estimation-gratuite/';

export const NAV = [
  { href: '/nos-maisons/', label: 'Nos maisons' },
  { href: '/antiquites/', label: 'Spécialités' },
  { href: '/rachat-succession/', label: 'Succession' },
  { href: '/expertise-estimation/', label: 'Expertise' },
  { href: '/la-maison/', label: 'La maison' },
];

export type Maison = {
  slug: string;
  name: string;
  short: string;
  deps: string;
  depList: string[];
  region: string;
  cities: string[];
  img: string;
  imgSecond: string;
  lead: string;
  paragraphs: string[];
  objets: string[];
  titleTag: string;
  metaDesc: string;
  h1: string;
  faq: { q: string; a: string }[];
};

export const MAISONS: Maison[] = [
  {
    slug: 'maison-charente',
    name: 'La Maison Charente',
    short: 'Charente',
    deps: '16 · 17',
    depList: ['Charente (16)', 'Charente-Maritime (17)'],
    region: 'Charente et Charente-Maritime',
    cities: ['Angoulême', 'Cognac', 'La Rochelle', 'Saintes', 'Rochefort', 'Royan', 'Île de Ré'],
    img: 'angouleme',
    imgSecond: 'la-rochelle',
    h1: 'Antiquaire expert en Charente (16 et 17)',
    titleTag: 'Antiquaire Charente (16-17) : expertise et estimation gratuite',
    metaDesc:
      'Maison Charente : antiquaire et expert à Angoulême, Cognac et La Rochelle. Estimation gratuite, rachat de succession et d’objets d’art en 16 et 17.',
    lead:
      'D’Angoulême aux quais de La Rochelle, la Maison Charente se déplace chez vous pour estimer, expertiser et racheter mobilier, tableaux, bronzes et objets d’art.',
    paragraphs: [
      'Entre les grandes demeures des vignobles du Cognaçais, les hôtels particuliers de Saintes et de La Rochelle et les maisons de pêcheurs de l’île de Ré, la Charente et la Charente-Maritime conservent un patrimoine mobilier d’une rare diversité : commodes de port en noyer, faïences de Rochefort, argenterie armoriée, cartes marines et instruments de navigation.',
      'Notre équipe intervient dans les deux départements pour les successions, les déménagements en maison de retraite, les partages entre héritiers et les ventes de collections. Chaque dossier débute par une estimation gratuite à partir de vos photographies, puis par une visite à domicile sans engagement.',
      'Nous travaillons avec discrétion et rapidité : inventaire détaillé, rapport d’expertise écrit lorsque vous le souhaitez, proposition de rachat ferme ou mise en vente auprès de notre réseau d’antiquaires et de collectionneurs.',
    ],
    objets: ['Mobilier de port et de vignoble', 'Faïences et porcelaines', 'Marine et instruments de navigation', 'Argenterie armoriée', 'Tableaux de l’école de Saintonge'],
    faq: [
      { q: 'Intervenez-vous à La Rochelle et sur l’île de Ré ?', a: 'Oui. La Maison Charente couvre l’ensemble de la Charente-Maritime : La Rochelle, Rochefort, Royan, Saintes, l’île de Ré et l’île d’Oléron. Le déplacement pour l’estimation est gratuit.' },
      { q: 'Rachetez-vous des objets provenant d’une succession à Cognac ou Angoulême ?', a: 'Oui. Nous rachetons le contenu complet d’une maison ou d’un appartement, ou seulement les pièces d’intérêt, après un inventaire détaillé et une estimation écrite.' },
    ],
  },
  {
    slug: 'maison-perigord',
    name: 'La Maison Périgord',
    short: 'Périgord',
    deps: '24',
    depList: ['Dordogne (24)'],
    region: 'Dordogne et vallée de la Vézère',
    cities: ['Périgueux', 'Bergerac', 'Sarlat-la-Canéda', 'Les Eyzies', 'Terrasson-Lavilledieu', 'Brantôme', 'Nontron'],
    img: 'perigord-chateau',
    imgSecond: 'vezere',
    h1: 'Antiquaire expert en Périgord et Dordogne',
    titleTag: 'Antiquaire Périgord (24) : expert et rachat de succession',
    metaDesc:
      'Maison Périgord : antiquaire et expert à Périgueux, Sarlat et Bergerac. Estimation gratuite d’antiquités, rachat de succession et d’objets d’art en Dordogne.',
    lead:
      'Manoirs, gentilhommières et maisons de la vallée de la Vézère : la Maison Périgord estime et rachète le patrimoine mobilier de la Dordogne.',
    paragraphs: [
      'Le Périgord compte l’une des plus fortes densités de châteaux et de manoirs de France. Derrière leurs façades de pierre blonde se trouvent des meubles d’époque Louis XIII à Louis XVI, des tapisseries, des armes anciennes, des tableaux de famille et des collections accumulées sur plusieurs générations.',
      'De Périgueux à Sarlat, de Bergerac à Brantôme, nous accompagnons les familles et les notaires lors des successions et des partages. Nous établissons l’inventaire, identifions les pièces de qualité muséale et proposons un rachat transparent, objet par objet ou en bloc.',
      'Pour les propriétés de grande taille, nous organisons des journées d’expertise sur place avec plusieurs spécialistes : mobilier, peinture, orfèvrerie, arts de la table, livres anciens.',
    ],
    objets: ['Mobilier de manoir et de gentilhommière', 'Tapisseries et textiles anciens', 'Orfèvrerie et arts de la table', 'Livres et manuscrits', 'Tableaux de famille et portraits'],
    faq: [
      { q: 'Estimez-vous le contenu d’un château ou d’un manoir en Dordogne ?', a: 'Oui. Pour les grandes propriétés, nous organisons des journées d’expertise sur place avec plusieurs spécialistes et remettons un inventaire détaillé accompagné d’une estimation.' },
      { q: 'Quels délais pour une expertise à Périgueux ou Sarlat ?', a: 'Une première estimation à partir de photographies est transmise sous 48 heures. La visite à domicile est généralement planifiée dans la semaine.' },
    ],
  },
  {
    slug: 'maison-bordelaise',
    name: 'La Maison Bordelaise',
    short: 'Bordelaise',
    deps: '33',
    depList: ['Gironde (33)'],
    region: 'Gironde et Bassin d’Arcachon',
    cities: ['Bordeaux', 'Arcachon', 'Libourne', 'Saint-Émilion', 'Pessac', 'Mérignac', 'Cap Ferret'],
    img: 'bordeaux-bourse',
    imgSecond: 'bordeaux-gravure',
    h1: 'Antiquaire expert à Bordeaux et en Gironde',
    titleTag: 'Antiquaire Bordeaux (33) : estimation gratuite et expertise',
    metaDesc:
      'Maison Bordelaise : antiquaire et expert à Bordeaux, Arcachon et Libourne. Estimation gratuite, rachat d’antiquités, de succession et d’objets d’art en Gironde.',
    lead:
      'Hôtels particuliers des Chartrons, châteaux du Médoc, villas d’Arcachon : la Maison Bordelaise estime et rachète les objets d’art de la Gironde.',
    paragraphs: [
      'Bordeaux a bâti sa fortune sur le commerce atlantique, et ses intérieurs en gardent la trace : acajou de Cuba, bronzes dorés, pendules d’armateurs, porcelaines de la Compagnie des Indes, argenterie de négociants et peintures du XVIIIe siècle.',
      'Nous intervenons à Bordeaux Métropole, dans les châteaux viticoles de Saint-Émilion, du Médoc et des Graves, sur le Bassin d’Arcachon et jusqu’à Libourne. Notre approche est simple : une estimation gratuite, un rendez-vous à votre convenance et une réponse écrite claire.',
      'Particuliers, notaires, administrateurs de biens et gestionnaires de patrimoine nous confient inventaires, partages et ventes. Nous assurons le tri, l’enlèvement et le paiement sécurisé.',
    ],
    objets: ['Acajou et mobilier d’armateur', 'Bronzes dorés et pendules', 'Porcelaines de la Compagnie des Indes', 'Argenterie de négociant', 'Peintures et gravures du XVIIIe siècle'],
    faq: [
      { q: 'Vous déplacez-vous dans les châteaux du Médoc et de Saint-Émilion ?', a: 'Oui. Nous intervenons dans toute la Gironde, y compris les propriétés viticoles, pour l’estimation et le rachat du mobilier et des objets d’art.' },
      { q: 'Travaillez-vous avec les notaires bordelais ?', a: 'Oui. Nous collaborons régulièrement avec les études notariales pour les inventaires de succession et remettons des estimations écrites exploitables pour le règlement des dossiers.' },
    ],
  },
  {
    slug: 'maison-pays-basque',
    name: 'La Maison Pays Basque',
    short: 'Pays Basque',
    deps: '64 · 40',
    depList: ['Pyrénées-Atlantiques (64)', 'Landes (40)'],
    region: 'Pyrénées-Atlantiques et Landes',
    cities: ['Biarritz', 'Bayonne', 'Saint-Jean-de-Luz', 'Pau', 'Dax', 'Mont-de-Marsan', 'Hossegor'],
    img: 'pays-basque',
    imgSecond: 'biarritz',
    h1: 'Antiquaire expert au Pays Basque et à Biarritz',
    titleTag: 'Antiquaire Pays Basque (64-40) : Biarritz, Bayonne, Landes',
    metaDesc:
      'Maison Pays Basque : antiquaire et expert à Biarritz, Bayonne, Pau et Dax. Estimation gratuite, rachat de succession et d’objets d’art en 64 et 40.',
    lead:
      'Villas de Biarritz, fermes labourdines, demeures de Pau et des Landes : la Maison Pays Basque estime et rachète vos antiquités avec discrétion.',
    paragraphs: [
      'Du littoral de Biarritz aux vallées de Soule et de Basse-Navarre, le patrimoine basque et béarnais associe coffres sculptés, stèles discoïdales, argenterie de culte, mobilier de villa Belle Époque et peintures de l’école basque.',
      'Nous couvrons les Pyrénées-Atlantiques et les Landes : Biarritz, Bayonne, Saint-Jean-de-Luz, Pau, Dax, Mont-de-Marsan et la côte landaise. Résidences secondaires, successions, mise en maison de retraite ou départ à l’étranger : nous traitons chaque dossier avec la même attention.',
      'Après l’estimation gratuite, nous organisons l’inventaire et l’enlèvement, avec un paiement sécurisé sous 48 heures lorsque l’offre de rachat est acceptée.',
    ],
    objets: ['Mobilier basque et béarnais', 'Mobilier de villa Belle Époque', 'Argenterie et objets de culte', 'Peintures de l’école basque', 'Bijoux et montres anciennes'],
    faq: [
      { q: 'Intervenez-vous à Biarritz et à Saint-Jean-de-Luz ?', a: 'Oui. La Maison Pays Basque couvre l’ensemble de la côte basque, l’intérieur du Pays basque, le Béarn et les Landes.' },
      { q: 'Estimez-vous une résidence secondaire fermée une partie de l’année ?', a: 'Oui. Nous nous adaptons à vos disponibilités et pouvons travailler avec le gardien, le notaire ou un mandataire pour accéder au bien.' },
    ],
  },
];

export const EXTENSION = {
  slug: 'gard-herault',
  name: 'Gard et Hérault',
  deps: '30 · 34',
  cities: ['Nîmes', 'Montpellier', 'Uzès', 'Sète', 'Béziers', 'Alès', 'Pézenas'],
  img: 'nimes',
  h1: 'Antiquaire expert dans le Gard et l’Hérault',
  titleTag: 'Antiquaire Gard et Hérault : Nîmes, Montpellier, Uzès',
  metaDesc:
    'Antiquaire et expert à Nîmes, Montpellier, Uzès et Sète. Estimation gratuite, rachat de succession et d’objets d’art dans le Gard (30) et l’Hérault (34).',
  lead:
    'Notre réseau s’étend jusqu’au Languedoc : nous estimons et rachetons les antiquités de Nîmes, Montpellier, Uzès, Sète et Pézenas.',
  paragraphs: [
    'Dans le Gard et l’Hérault, les hôtels particuliers de Montpellier, les mas de la Costière, les demeures d’Uzès et les maisons de maître de Pézenas abritent un patrimoine mobilier souvent méconnu : mobilier provençal et languedocien, faïences de Moustiers et de Montpellier, tableaux de l’école de Nîmes, argenterie et bijoux.',
    'Nos experts se déplacent dans les deux départements pour des estimations gratuites, des successions et des ventes de collections. Nous mobilisons la Maison Bordelaise ou la Maison Pays Basque lorsque votre dossier requiert un spécialiste précis.',
  ],
  faq: [
    { q: 'Vous déplacez-vous à Nîmes, Montpellier et Uzès ?', a: 'Oui. Nous intervenons dans l’ensemble du Gard et de l’Hérault pour l’estimation gratuite, l’expertise et le rachat d’antiquités.' },
    { q: 'Les délais sont-ils les mêmes que dans le Sud-Ouest ?', a: 'La première estimation à partir de photographies reste transmise sous 48 heures ; la visite à domicile est planifiée selon la disponibilité de nos experts.' },
  ],
};

export type Specialite = {
  slug: string;
  name: string;
  kw: string;
  img: string;
  h1: string;
  titleTag: string;
  metaDesc: string;
  lead: string;
  sections: { h: string; p: string[] }[];
  points: string[];
  faq: { q: string; a: string }[];
};

export const SPECIALITES: Specialite[] = [
  {
    slug: 'tableaux-anciens',
    name: 'Tableaux anciens',
    kw: 'tableau ancien',
    img: 'tableau-corot',
    h1: 'Expertise et estimation de tableaux anciens',
    titleTag: 'Expertise tableau ancien : estimation gratuite, rachat',
    metaDesc:
      'Expertise de tableaux anciens, huiles et gravures : estimation gratuite, attribution et rachat dans tout le Sud-Ouest, de la Charente au Pays basque.',
    lead:
      'Huiles sur toile, panneaux, pastels, dessins et gravures : nous identifions, attribuons et estimons les œuvres anciennes des demeures du Sud-Ouest.',
    sections: [
      {
        h: 'Identifier un tableau ancien',
        p: [
          'Une signature, un châssis, un cachet de collection ou un numéro d’inventaire au revers sont autant d’indices. Nous examinons le support, la touche, les pigments et l’état de conservation avant de proposer une attribution prudente.',
          'Peintures religieuses, portraits du XVIIIe siècle, paysages de l’école de Barbizon, marines, natures mortes : chaque famille d’œuvres a son marché. Nous situons votre tableau dans ce marché et vous remettons une estimation écrite.',
        ],
      },
      {
        h: 'Faut-il restaurer avant de vendre ?',
        p: [
          'Dans la plupart des cas, non. Un vernis jauni, une toile détendue ou un petit manque ne diminuent pas toujours la valeur ; une restauration mal conduite peut au contraire la réduire. Nous vous conseillons au cas par cas.',
        ],
      },
    ],
    points: ['Huiles sur toile et sur panneau', 'Portraits et scènes de genre', 'Paysages de l’école de Barbizon', 'Marines et vues de ports', 'Dessins, pastels et gravures'],
    faq: [
      { q: 'Comment faire estimer un tableau ancien gratuitement ?', a: 'Envoyez des photographies du recto, du verso, de la signature et des cachets via notre formulaire. Nous vous répondons sous 48 heures avec une première fourchette de valeur.' },
      { q: 'Rachetez-vous les tableaux sans signature ?', a: 'Oui. De nombreuses œuvres anciennes ne sont pas signées. Nous les étudions à partir de leur style, de leur support et de leur histoire.' },
    ],
  },
  {
    slug: 'bronzes-sculptures',
    name: 'Bronzes et sculptures',
    kw: 'bronze ancien',
    img: 'bronze-sculpture',
    h1: 'Estimation et rachat de bronzes anciens',
    titleTag: 'Bronze ancien : expertise, estimation et rachat gratuit',
    metaDesc:
      'Estimation gratuite de bronzes anciens, statuettes et sculptures : fonte d’édition, patine, cachets de fondeur. Rachat dans le Sud-Ouest, du 16 au 64.',
    lead:
      'Statuettes d’animaliers, bronzes d’édition, marbres et sculptures : nous lisons la fonte, la patine et les cachets pour estimer votre pièce.',
    sections: [
      {
        h: 'Lire un bronze : fonte, patine, cachet',
        p: [
          'La qualité d’une fonte se juge à la finesse des détails, à la ciselure après fonte, à la patine et aux marques du fondeur. Un cachet d’édition ou un numéro de série change l’estimation de manière significative.',
          'Nous distinguons les fontes d’époque, les éditions posthumes et les reproductions modernes, et précisons le marché de chaque catégorie.',
        ],
      },
      {
        h: 'Marbres, terres cuites et plâtres',
        p: [
          'Au-delà du bronze, nous estimons les sculptures en marbre, albâtre, terre cuite et plâtre d’atelier, ainsi que les bustes et les statuettes de la fin du XIXe siècle.',
        ],
      },
    ],
    points: ['Bronzes d’animaliers et d’édition', 'Statuettes antiques et de la Renaissance', 'Garnitures de cheminée et bronzes d’ameublement', 'Marbres, albâtres et terres cuites', 'Bustes et sculptures du XIXe siècle'],
    faq: [
      { q: 'Comment connaître la valeur d’un bronze ancien ?', a: 'Photographiez la pièce sous plusieurs angles, la base, les cachets et la signature. Notre estimation gratuite précise l’époque, la qualité de la fonte et la valeur.' },
      { q: 'Reprenez-vous les sculptures lourdes ?', a: 'Oui. Nous organisons l’enlèvement avec un emballage adapté et une assurance pendant le transport.' },
    ],
  },
  {
    slug: 'bijoux-montres',
    name: 'Bijoux et horlogerie',
    kw: 'bijoux anciens',
    img: 'montre-gousset',
    h1: 'Expertise de bijoux anciens et de montres',
    titleTag: 'Bijoux anciens et montres : expertise et rachat à domicile',
    metaDesc:
      'Expertise gratuite de bijoux anciens, montres de gousset et pendules : or, diamants, signatures. Rachat à domicile en Charente, Périgord, Gironde, Pays basque.',
    lead:
      'Bagues, broches, parures, montres de gousset, pendules : nous expertisons les bijoux et l’horlogerie anciens, signés ou non.',
    sections: [
      {
        h: 'Bijoux anciens : métal, pierres, poinçons',
        p: [
          'Nous contrôlons les poinçons (tête d’aigle, tête de cheval, poinçons de maître), identifions les pierres et jugeons la taille, la couleur et la pureté. Un bijou signé d’une grande maison ou d’une époque recherchée (Art nouveau, Art déco) vaut souvent bien plus que son poids d’or.',
        ],
      },
      {
        h: 'Montres de gousset, pendules et horlogerie',
        p: [
          'Le mouvement, la signature du cadran et les complications déterminent la valeur d’une montre. Pour les pendules de cheminée et les cartels, nous examinons le mouvement, le décor et les dorures.',
        ],
      },
    ],
    points: ['Bijoux or, platine et argent', 'Diamants et pierres de couleur', 'Parures Art nouveau et Art déco', 'Montres de gousset et de poignet', 'Pendules, cartels et horloges'],
    faq: [
      { q: 'Faites-vous une estimation de bijoux sans engagement ?', a: 'Oui. L’estimation est gratuite et sans obligation de vendre. Vous recevez une fourchette de valeur par écrit.' },
      { q: 'Une montre en panne a-t-elle de la valeur ?', a: 'Souvent oui. Une montre ancienne signée peut conserver une valeur importante même si elle ne fonctionne plus.' },
    ],
  },
  {
    slug: 'mobilier-epoque',
    name: 'Mobilier d’époque',
    kw: 'mobilier ancien',
    img: 'commode-louis-xv',
    h1: 'Estimation de meubles anciens et d’époque',
    titleTag: 'Mobilier ancien : estimation et rachat de meubles d’époque',
    metaDesc:
      'Estimation gratuite de mobilier ancien et de meubles d’époque : commode Louis XV, bureau, armoire. Rachat de succession en Sud-Ouest, du Périgord à Bordeaux.',
    lead:
      'Commodes, bureaux, secrétaires, armoires, fauteuils : nous datons le mobilier, distinguons l’époque de l’imitation et estimons sa valeur.',
    sections: [
      {
        h: 'Meuble d’époque ou meuble de style ?',
        p: [
          'Un meuble d’époque a été fabriqué au moment du style qu’il représente ; un meuble de style en est une copie postérieure. Assemblages à queue d’aronde, traces d’outils, patine des fonds de tiroirs et ferrures permettent de trancher.',
          'Commodes Louis XV, bureaux Louis XVI, buffets provinciaux en chêne ou en noyer : nous indiquons l’époque, la région de fabrication et l’état.',
        ],
      },
      {
        h: 'Un marché sélectif',
        p: [
          'Le marché du mobilier ancien favorise aujourd’hui les pièces de grande qualité, les modèles estampillés et les meubles dans leur état d’origine. Notre estimation tient compte de ce marché réel, sans promesses excessives.',
        ],
      },
    ],
    points: ['Commodes et bureaux Louis XV et Louis XVI', 'Armoires et buffets provinciaux', 'Secrétaires et cabinets marquetés', 'Fauteuils, canapés et sièges estampillés', 'Mobilier de campagne et de gentilhommière'],
    faq: [
      { q: 'Mon meuble ancien a-t-il encore de la valeur ?', a: 'Cela dépend de l’époque, de la qualité et de l’état. Une estimation gratuite à partir de photographies vous donne une première réponse sous 48 heures.' },
      { q: 'Reprenez-vous le contenu complet d’une maison ?', a: 'Oui. Nous rachetons les pièces d’intérêt et pouvons organiser le débarras du reste dans le cadre d’une succession.' },
    ],
  },
  {
    slug: 'porcelaines-arts-de-la-table',
    name: 'Porcelaines et arts de la table',
    kw: 'porcelaine ancienne',
    img: 'vase-porcelaine',
    h1: 'Estimation de porcelaines et faïences',
    titleTag: 'Porcelaine ancienne : expertise, estimation gratuite',
    metaDesc:
      'Expertise de porcelaines, faïences, cristal et argenterie : estimation gratuite et rachat dans le Sud-Ouest. Marques, manufactures, services anciens.',
    lead:
      'Vases, services, faïences, cristal, argenterie : nous identifions les manufactures, lisons les marques et estimons chaque pièce.',
    sections: [
      {
        h: 'Lire les marques et les manufactures',
        p: [
          'Sèvres, Limoges, Meissen, Compagnie des Indes, faïences de Moustiers ou de Rochefort : les marques, les décors et la pâte permettent de situer une pièce. Nous précisons aussi les restaurations et les éclats, qui influencent la valeur.',
        ],
      },
      {
        h: 'Argenterie, cristal et services complets',
        p: [
          'Nous estimons les ménagères en argent massif, les timbales, les verreries de Baccarat ou de Saint-Louis et les services complets. Un service complet, en bon état et dans sa boîte d’origine, conserve sa valeur.',
        ],
      },
    ],
    points: ['Porcelaines de Chine et d’Europe', 'Faïences régionales', 'Cristal de Baccarat et de Saint-Louis', 'Argenterie et ménagères', 'Services complets de table'],
    faq: [
      { q: 'Comment savoir si ma porcelaine est ancienne ?', a: 'Regardez le dessous de la pièce : marque, numéro, signature de manufacture. Envoyez-nous les photographies, nous vous répondons sous 48 heures.' },
      { q: 'Une pièce ébréchée peut-elle être rachetée ?', a: 'Oui, si la pièce présente un intérêt. L’estimation tient compte des accidents et des restaurations.' },
    ],
  },
];

export const FAQ_GENERAL = [
  { q: 'L’estimation de mes objets d’art est-elle vraiment gratuite ?', a: 'Oui. L’estimation à partir de photographies et le déplacement à domicile pour une première visite sont gratuits et sans engagement de votre part.' },
  { q: 'Dans quelles zones intervenez-vous ?', a: 'Nous couvrons la Charente et la Charente-Maritime (16, 17), la Dordogne (24), la Gironde (33), les Landes (40), les Pyrénées-Atlantiques (64), le Gard (30) et l’Hérault (34).' },
  { q: 'Comment se déroule le rachat d’une succession ?', a: 'Après un inventaire et une estimation écrite, nous vous remettons une proposition de rachat ferme. En cas d’accord, l’enlèvement est organisé et le paiement effectué par virement sécurisé.' },
  { q: 'Quels objets rachetez-vous ?', a: 'Mobilier ancien, tableaux, bronzes, sculptures, bijoux, montres, pendules, porcelaines, argenterie, livres anciens, tapis, objets de collection et d’art décoratif.' },
  { q: 'Sous quel délai recevrai-je une réponse ?', a: 'Une première estimation est transmise sous 48 heures. La visite à domicile est généralement planifiée dans la semaine suivante.' },
  { q: 'Puis-je faire estimer des objets sans les vendre ?', a: 'Oui. Nous établissons des estimations pour assurance, partage successoral, donation ou simple curiosité.' },
];

export const CITIES_BY_DEP: { dep: string; label: string; in: string; maison: string; cities: string }[] = [
  { dep: '16', label: 'Charente', in: 'en Charente', maison: 'maison-charente', cities: 'Angoulême, Cognac' },
  { dep: '17', label: 'Charente-Maritime', in: 'en Charente-Maritime', maison: 'maison-charente', cities: 'La Rochelle, Saintes, Royan' },
  { dep: '24', label: 'Dordogne', in: 'en Dordogne', maison: 'maison-perigord', cities: 'Périgueux, Bergerac, Sarlat' },
  { dep: '33', label: 'Gironde', in: 'en Gironde', maison: 'maison-bordelaise', cities: 'Bordeaux, Arcachon, Libourne' },
  { dep: '40', label: 'Landes', in: 'dans les Landes', maison: 'maison-pays-basque', cities: 'Dax, Mont-de-Marsan' },
  { dep: '64', label: 'Pyrénées-Atlantiques', in: 'dans les Pyrénées-Atlantiques', maison: 'maison-pays-basque', cities: 'Biarritz, Bayonne, Pau' },
  { dep: '30', label: 'Gard', in: 'dans le Gard', maison: 'gard-herault', cities: 'Nîmes, Uzès, Alès' },
  { dep: '34', label: 'Hérault', in: 'dans l’Hérault', maison: 'gard-herault', cities: 'Montpellier, Sète, Béziers' },
];
