/**
 * Pages « service » à forte intention commerciale : chacune cible une requête transactionnelle
 * (rachat, estimation, vente) et mène vers le formulaire Tally.
 */
export type ServiceSection = { h: string; p: string[]; ul?: string[] };
export type Service = {
  slug: string;
  kw: string;
  title: string;
  desc: string;
  h1: string;
  lead: string;
  cta: string;
  sections: ServiceSection[];
  steps?: { t: string; d: string }[];
  faq: { q: string; a: string }[];
  guides: string[];
  tallyTitle: string;
  tallyIntro: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'rachat-antiquites-a-domicile',
    kw: 'rachat antiquités à domicile',
    title: 'Rachat d’antiquités à domicile : estimation gratuite',
    desc: 'Antiquaire acheteur à domicile en Nouvelle-Aquitaine et Occitanie : estimation gratuite, offre ferme, paiement direct et enlèvement. Meubles, tableaux, bijoux.',
    h1: 'Rachat d’antiquités à domicile',
    lead: 'Nous nous déplaçons chez vous pour estimer et racheter meubles anciens, tableaux, bronzes, bijoux et objets d’art. Estimation gratuite, offre ferme, paiement direct.',
    cta: 'Demander un rachat à domicile',
    sections: [
      {
        h: 'Un antiquaire acheteur qui vient à vous',
        p: [
          'Faire venir un professionnel à domicile évite les transports, les emballages et les intermédiaires. L’examen des objets dans leur contexte permet aussi de mieux les dater et de repérer des détails qu’une photographie ne montre pas : estampilles, étiquettes, signatures, marques de fabrique.',
          'Nous couvrons l’ensemble de la Nouvelle-Aquitaine et de l’Occitanie, des villes comme des campagnes. Que vous ayez une pièce à faire estimer ou le contenu complet d’une maison, la démarche reste la même : un échange par photos, une visite, une estimation écrite, puis une proposition de rachat ferme.',
        ],
      },
      {
        h: 'Ce que nous rachetons',
        p: ['Tout ce qui relève de l’art et de l’ancien, avec une attention particulière aux pièces d’époque et aux objets de qualité :'],
        ul: ['Mobilier ancien : commodes, armoires, bureaux, secrétaires, buffets, fauteuils', 'Tableaux, dessins, gravures, cadres anciens', 'Bronzes, sculptures, pendules, horlogerie', 'Bijoux anciens, montres, argenterie, orfèvrerie', 'Porcelaines, faïences, cristal, objets de collection, livres anciens'],
      },
      {
        h: 'Un paiement direct, sans intermédiaire',
        p: [
          'Lorsque la proposition est acceptée, le règlement est effectué directement, sans commission ni frais cachés. L’enlèvement et le transport des objets achetés sont organisés et assurés.',
        ],
      },
    ],
    steps: [
      { t: 'Vous envoyez des photos', d: 'Décrivez vos objets via le formulaire.' },
      { t: 'Nous estimons gratuitement', d: 'Première fourchette de valeur, sans engagement.' },
      { t: 'Nous venons chez vous', d: 'Visite à domicile, examen détaillé.' },
      { t: 'Offre ferme et paiement', d: 'Vous décidez, nous réglons et enlevons.' },
    ],
    faq: [
      { q: 'Le déplacement est-il vraiment gratuit ?', a: 'Oui, la visite d’estimation est gratuite et sans engagement dans toute la Nouvelle-Aquitaine et toute l’Occitanie.' },
      { q: 'Dois-je être présent ?', a: 'Idéalement oui, mais un mandataire, un gardien ou le notaire peut vous représenter pour l’accès au bien.' },
      { q: 'Comment est calculé le prix de rachat ?', a: 'D’après la valeur de marché de chaque objet, son état, sa rareté et le temps nécessaire pour le restaurer et le revendre. L’offre est détaillée objet par objet.' },
    ],
    guides: ['ou-vendre-des-meubles-anciens', 'que-faire-des-meubles-apres-un-deces'],
    tallyTitle: 'Demandez un rachat à domicile',
    tallyIntro: 'Décrivez vos objets et joignez des photos : nous vous répondons personnellement.',
  },
  {
    slug: 'vendre-meubles-anciens',
    kw: 'vendre meubles anciens',
    title: 'Vendre ses meubles anciens : estimation et rachat gratuit',
    desc: 'Vous souhaitez vendre un meuble ancien (commode, armoire, bureau, buffet) ? Estimation gratuite, rachat à domicile et conseils d’un antiquaire expert.',
    h1: 'Vendre ses meubles anciens',
    lead: 'Commode, armoire, bureau, buffet, secrétaire : faites estimer votre meuble ancien gratuitement et vendez-le à un prix juste, sans vous déplacer.',
    cta: 'Estimer mon meuble',
    sections: [
      {
        h: 'Quels meubles anciens se vendent ?',
        p: [
          'Les meubles d’époque et de belle qualité trouvent toujours preneur : commodes Louis XV et Louis XVI, bureaux plats, secrétaires, cabinets marquetés, buffets provinciaux de bonne facture, sièges estampillés. Les meubles courants du XXe siècle se vendent à des niveaux plus modestes, mais méritent une estimation.',
        ],
      },
      {
        h: 'Ce qui détermine le prix',
        p: ['L’époque, la qualité de fabrication, les matériaux, l’état de conservation, la provenance et l’éventuelle estampille. Notre guide détaille ces critères.'],
        ul: ['Meuble d’époque ou meuble de style', 'Essences de bois, marqueterie, bronzes', 'Patine d’origine, absence de restauration lourde', 'Dimensions et facilité de revente'],
      },
      {
        h: 'Vendre sans vous déplacer',
        p: [
          'Après une estimation à partir de photographies, nous nous rendons chez vous pour examiner le meuble. Si vous acceptez notre proposition, le paiement est direct et l’enlèvement assuré. Aucun frais n’est à votre charge.',
        ],
      },
    ],
    faq: [
      { q: 'Achetez-vous un seul meuble ?', a: 'Oui. Vous pouvez faire estimer et vendre une pièce unique ou plusieurs.' },
      { q: 'Que faire si le meuble est abîmé ?', a: 'Présentez-le tel quel : l’estimation tient compte des accidents et des restaurations.' },
    ],
    guides: ['combien-vaut-un-meuble-ancien', 'reconnaitre-un-meuble-d-epoque', 'restaurer-avant-de-vendre-un-meuble-ancien'],
    tallyTitle: 'Estimez votre meuble ancien',
    tallyIntro: 'Quelques photos suffisent : vue d’ensemble, détails, intérieur des tiroirs.',
  },
  {
    slug: 'debarras-maison-succession',
    kw: 'débarras maison succession',
    title: 'Débarras de maison en succession : estimer avant de vider',
    desc: 'Avant un débarras de maison après décès, faites estimer les meubles et objets d’art : rachat des pièces de valeur, enlèvement, accompagnement des héritiers.',
    h1: 'Débarras de maison en succession : estimer avant de vider',
    lead: 'Un débarras mal préparé peut faire disparaître des pièces de valeur. Faites d’abord estimer le contenu, puis décidez de ce qui est vendu, partagé ou débarrassé.',
    cta: 'Faire estimer avant le débarras',
    sections: [
      {
        h: 'Pourquoi estimer avant de débarrasser ?',
        p: [
          'Une entreprise de débarras propose généralement un prix global pour vider la maison, parfois en vendant elle-même les objets de valeur. En faisant d’abord estimer le contenu par un antiquaire, vous identifiez ce qui mérite d’être vendu et vous obtenez une offre détaillée.',
        ],
      },
      {
        h: 'Comment nous procédons',
        p: [
          'Nous visitons la maison, repérons les pièces d’intérêt (mobilier, tableaux, bronzes, bijoux, argenterie, livres, objets de collection), remets une estimation écrite et propose un rachat des pièces retenues, avec enlèvement. Le reste du contenu peut ensuite être trié, donné ou confié à une entreprise de débarras.',
        ],
        ul: ['Visite et inventaire des pièces de valeur', 'Estimation écrite pour le notaire et les héritiers', 'Rachat des pièces retenues, paiement direct', 'Enlèvement des objets achetés'],
      },
      {
        h: 'Un accompagnement discret et respectueux',
        p: [
          'La vente d’une maison de famille est un moment sensible. Nous intervenons avec tact, dans le respect des souhaits des héritiers, et nous nous adaptons à votre calendrier et à celui du notaire.',
        ],
      },
    ],
    faq: [
      { q: 'Assurez-vous le débarras complet de la maison ?', a: 'Nous rachetons et enlevons les pièces d’intérêt. Pour le mobilier courant sans valeur, nous vous orientons vers des solutions adaptées (don, association, entreprise de débarras).' },
      { q: 'Peut-on faire estimer pendant la procédure de succession ?', a: 'Oui, et c’est même conseillé : l’estimation écrite aide le notaire et les héritiers. Veillez à ne rien disperser sans l’accord de tous.' },
    ],
    guides: ['que-faire-des-meubles-apres-un-deces', 'estimer-le-mobilier-d-une-succession'],
    tallyTitle: 'Faire estimer avant un débarras',
    tallyIntro: 'Indiquez la commune, le type de bien et joignez quelques photos : nous vous recontactons.',
  },
  {
    slug: 'inventaire-succession-estimation',
    kw: 'inventaire succession estimation mobilier',
    title: 'Inventaire de succession : estimation du mobilier ancien',
    desc: 'Inventaire et estimation écrite du mobilier d’une succession : meubles, tableaux, bijoux, argenterie. Document utilisable par le notaire et les héritiers.',
    h1: 'Inventaire de succession et estimation du mobilier',
    lead: 'Un inventaire détaillé avec estimation écrite sécurise la déclaration de succession et facilite le partage entre héritiers.',
    cta: 'Demander un inventaire',
    sections: [
      {
        h: 'Un document exploitable par le notaire',
        p: [
          'Nous remettons une estimation écrite, objet par objet : description, époque, matériaux, état, valeur ou fourchette de valeur, photographies. Ce document peut servir à la déclaration de succession, au partage ou à l’assurance.',
        ],
      },
      {
        h: 'Pour les héritiers : transparence et accord',
        p: [
          'Lorsqu’il y a plusieurs héritiers, une estimation neutre établie par un professionnel limite les désaccords. Elle permet aussi de répartir les pièces en tenant compte de leur valeur réelle.',
        ],
        ul: ['Description et dimensions de chaque objet', 'Fourchette de valeur par objet', 'Photographies', 'Date et signature de l’expert'],
      },
      {
        h: 'Et si je souhaite vendre ?',
        p: ['Une proposition de rachat peut être formulée en parallèle, objet par objet ou en bloc, sans obligation d’acceptation.'],
      },
    ],
    faq: [
      { q: 'L’inventaire est-il facturé ?', a: 'La première estimation et la visite sont gratuites et sans engagement. Un rapport d’expertise formalisé pour un dossier particulier peut faire l’objet d’un devis.' },
      { q: 'Travaillez-vous avec les notaires ?', a: 'Oui, avec les notaires, les avocats et les administrateurs de biens de toute la région.' },
    ],
    guides: ['estimer-le-mobilier-d-une-succession', 'que-faire-des-meubles-apres-un-deces'],
    tallyTitle: 'Demandez un inventaire de succession',
    tallyIntro: 'Indiquez la localisation du bien et le type de contenu : nous vous recontactons.',
  },
  {
    slug: 'estimation-antiquites-par-photos',
    kw: 'estimation antiquités en ligne gratuite',
    title: 'Estimation gratuite en ligne d’antiquités par photos',
    desc: 'Envoyez des photos de vos meubles, tableaux, bijoux ou objets d’art et recevez une estimation gratuite et sans engagement d’un antiquaire expert.',
    h1: 'Estimation gratuite d’antiquités par photos',
    lead: 'Pas besoin de vous déplacer : quelques photographies suffisent pour une première estimation gratuite, sans engagement.',
    cta: 'Envoyer mes photos',
    sections: [
      {
        h: 'Comment ça marche ?',
        p: ['Le formulaire est simple : vous décrivez vos objets, joignez vos photographies et laissez vos coordonnées. Nous vous répondons avec une première fourchette de valeur et, si nécessaire, une proposition de visite.'],
        ul: ['Meubles : vue d’ensemble, détails, intérieur des tiroirs', 'Tableaux : recto, verso, signature, cadre', 'Bijoux : poinçons, pierres, boîte', 'Objets d’art : toutes les faces, marques, dessous'],
      },
      {
        h: 'Quelle fiabilité ?',
        p: [
          'L’estimation sur photographies donne une première indication, avec la limite d’un examen à distance. Elle est confirmée ou affinée lors de la visite, sans engagement.',
        ],
      },
      {
        h: 'Particuliers, héritiers, collectionneurs',
        p: ['Que vous souhaitiez vendre, partager une succession, assurer un objet ou simplement connaître sa valeur, l’estimation est gratuite.'],
      },
    ],
    faq: [
      { q: 'Combien de temps pour recevoir une réponse ?', a: 'Chaque demande est étudiée personnellement. Plus vos photos sont complètes, plus la réponse est précise.' },
      { q: 'Puis-je faire estimer sans vendre ?', a: 'Oui, pour un partage, une assurance, une donation ou par curiosité.' },
    ],
    guides: ['photographier-ses-objets-pour-une-estimation', 'combien-vaut-un-meuble-ancien'],
    tallyTitle: 'Envoyez vos photos',
    tallyIntro: 'Décrivez vos objets et joignez vos photographies.',
  },
  {
    slug: 'vendre-collection-objets-d-art',
    kw: 'vendre collection objets d’art',
    title: 'Vendre une collection d’objets d’art : estimation et rachat',
    desc: 'Collection héritée ou personnelle (objets d’art, bibelots, bronzes, livres) : inventaire, estimation gratuite, rachat en bloc ou par lots, discrétion assurée.',
    h1: 'Vendre une collection d’objets d’art',
    lead: 'Une collection se valorise par un inventaire soigné et une stratégie de vente adaptée : rachat en bloc, par lots ou aux enchères spécialisées.',
    cta: 'Faire estimer ma collection',
    sections: [
      {
        h: 'Collections que nous prenons en charge',
        p: ['Collections d’objets d’art, de bronzes, de porcelaines, de bibelots, de livres anciens, d’instruments, d’armes anciennes, de pendules et d’horlogerie, d’argenterie ou d’objets régionaux.'],
      },
      {
        h: 'Inventaire, estimation, proposition',
        p: [
          'Nous commençons par un inventaire détaillé, puis une estimation d’ensemble. Nous proposons ensuite le rachat en bloc ou le conseil pour une vente par lots, selon l’intérêt de la collection.',
        ],
      },
      {
        h: 'Discrétion et continuité',
        p: ['La vente d’une collection engage souvent une histoire personnelle. Nous intervenons avec discrétion et dans le respect de la mémoire du collectionneur.'],
      },
    ],
    faq: [
      { q: 'Faut-il vendre une collection d’un seul tenant ?', a: 'Pas nécessairement. Selon la cohérence et la valeur des pièces, une vente en bloc ou par lots peut être préférable.' },
      { q: 'Faites-vous des estimations pour l’assurance ?', a: 'Oui, sur demande, avec un rapport détaillé.' },
    ],
    guides: ['vendre-une-collection-heritee', 'estimer-le-mobilier-d-une-succession'],
    tallyTitle: 'Faites estimer votre collection',
    tallyIntro: 'Décrivez la collection, indiquez le nombre de pièces et joignez quelques photos.',
  },
  {
    slug: 'notaires-heritiers-estimation-mobilier',
    kw: 'estimation mobilier notaire héritiers',
    title: 'Notaires et héritiers : estimation du mobilier de succession',
    desc: 'Service dédié aux notaires, avocats et administrateurs de biens : inventaire, estimation écrite du mobilier et rachat d’objets d’art, Sud-Ouest.',
    h1: 'Notaires, avocats, héritiers : estimation du mobilier',
    lead: 'Un interlocuteur unique pour les inventaires de mobilier et d’objets d’art : estimation écrite, discrétion, rachat possible, dans toute la Nouvelle-Aquitaine et l’Occitanie.',
    cta: 'Confier un dossier',
    sections: [
      {
        h: 'Ce que nous proposons aux professionnels du droit',
        p: ['Des estimations écrites et détaillées, des inventaires de mobilier meublant et d’objets d’art, des avis pour le partage et la déclaration de succession, et, si les héritiers le souhaitent, un rachat des pièces retenues.'],
        ul: ['Intervention rapide sur le territoire', 'Rapport écrit, daté et signé', 'Respect de la confidentialité du dossier', 'Rachat possible, paiement direct'],
      },
      {
        h: 'Un accompagnement des familles',
        p: ['Nous expliquons aux héritiers la démarche, les options de vente et les étapes. Les familles apprécient de disposer d’un document clair, utile à la discussion avec le notaire.'],
      },
      {
        h: 'Comment nous confier un dossier',
        p: ['Remplissez le formulaire en précisant la commune, le type de bien et vos contraintes de calendrier. Nous vous recontactons pour organiser la visite.'],
      },
    ],
    faq: [
      { q: 'Intervenez-vous sur l’ensemble du territoire ?', a: 'Oui : les 12 départements de la Nouvelle-Aquitaine et les 13 départements de l’Occitanie.' },
      { q: 'Pouvez-vous produire un rapport pour la succession ?', a: 'Oui, un rapport d’estimation détaillé peut être remis au notaire.' },
    ],
    guides: ['estimer-le-mobilier-d-une-succession', 'que-faire-des-meubles-apres-un-deces'],
    tallyTitle: 'Confiez-nous un dossier',
    tallyIntro: 'Indiquez la commune, la nature du bien et vos échéances.',
  },
];

export const service = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
