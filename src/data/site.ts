/**
 * Configuration centrale du site. Tout ce qui est à personnaliser avant la
 * mise en ligne (nom, domaine, formulaire Tally, coordonnées) se trouve ici.
 */
export const SITE = {
  name: 'Les Antiquités de Benjamin',
  short: 'Les Antiquités de Benjamin',
  wordmark: 'Les Antiquités de Benjamin',
  tagline: 'Cabinet d’Expertise & Antiquités du Sud-Ouest',
  url: 'https://www.antiquites-de-benjamin.fr',
  locale: 'fr_FR',
  /** Identifiant du formulaire Tally (https://tally.so/r/<ID>). Vide = placeholder affiché. */
  tallyId: 'xVr1r5',
  /** Coordonnées : laisser vide tant qu'elles ne sont pas confirmées (elles alimentent le JSON-LD). */
  phone: '',
  email: '',
  foundingNote: 'Experts en objets d’art et antiquités depuis plusieurs générations',
};

/** Informations légales (registre national des entreprises, fournies par l'exploitant). */
export const LEGAL = {
  owner: 'François Secula',
  status: 'Entrepreneur individuel',
  siren: '529 601 486',
  siret: '529 601 486 00010',
  vat: 'FR51 5296 0148 6',
  address: '21 rue du Docteur Tassin, 21200 Beaune',
  email: 'francoisseculapub@gmail.com',
  created: '20 janvier 2011',
  host: 'Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
};

export const ESTIMATION_URL = '/estimation-gratuite/';

export const NAV = [
  { href: '/zones-intervention/', label: 'Zones' },
  { href: '/antiquites/', label: 'Spécialités' },
  { href: '/rachat-succession/', label: 'Succession' },
  { href: '/expertise-estimation/', label: 'Expertise' },
  { href: '/conseils/', label: 'Conseils' },
  { href: '/a-propos/', label: 'À propos' },
];

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
      { q: 'Comment faire estimer un tableau ancien gratuitement ?', a: 'Envoyez des photographies du recto, du verso, de la signature et des cachets via notre formulaire. Nous vous répondons avec une première fourchette de valeur.' },
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
          'Nous contrôlons les poinçons (tête d’aigle, tête de chien, Minerve, poinçons de maître), identifions les pierres et jugeons la taille, la couleur et la pureté. Un bijou signé d’une grande maison ou d’une époque recherchée (Art nouveau, Art déco) vaut souvent bien plus que son poids d’or.',
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
      { q: 'Mon meuble ancien a-t-il encore de la valeur ?', a: 'Cela dépend de l’époque, de la qualité et de l’état. Une estimation gratuite à partir de photographies vous donne une première réponse.' },
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
      { q: 'Comment savoir si ma porcelaine est ancienne ?', a: 'Regardez le dessous de la pièce : marque, numéro, signature de manufacture. Envoyez-nous les photographies, nous vous répondons.' },
      { q: 'Une pièce ébréchée peut-elle être rachetée ?', a: 'Oui, si la pièce présente un intérêt. L’estimation tient compte des accidents et des restaurations.' },
    ],
  },
];

export const FAQ_GENERAL = [
  { q: 'L’estimation de mes objets d’art est-elle vraiment gratuite ?', a: 'Oui. L’estimation à partir de photographies et le déplacement à domicile pour une première visite sont gratuits et sans engagement de votre part.' },
  { q: 'Dans quelles zones intervenez-vous ?', a: 'Nous couvrons toute la Nouvelle-Aquitaine (12 départements) et toute l’Occitanie (13 départements), de la Charente-Maritime aux Pyrénées-Orientales et de la Corrèze à la Gironde.' },
  { q: 'Comment se déroule le rachat d’une succession ?', a: 'Après un inventaire et une estimation écrite, nous vous remettons une proposition de rachat ferme. En cas d’accord, l’enlèvement est organisé et le paiement effectué par virement sécurisé.' },
  { q: 'Quels objets rachetez-vous ?', a: 'Mobilier ancien, tableaux, bronzes, sculptures, bijoux, montres, pendules, porcelaines, argenterie, livres anciens, tapis, objets de collection et d’art décoratif.' },
  { q: 'Puis-je faire estimer des objets sans les vendre ?', a: 'Oui. Nous établissons des estimations pour assurance, partage successoral, donation ou simple curiosité.' },
];
