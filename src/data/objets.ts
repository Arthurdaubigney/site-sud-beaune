/**
 * Pages « objets » : une page par famille d'objets recherchée, pour capter les requêtes
 * « rachat / vendre / estimation + objet ». Chaque page répond à une intention précise
 * (que vaut mon objet ? comment le vendre ? à qui ?) et mène vers le formulaire.
 * Les textes ne donnent volontairement aucun prix chiffré : la valeur dépend de chaque pièce.
 */
export type ObjSection = { h: string; p: string[]; ul?: string[] };
export type Objet = {
  slug: string;
  name: string;
  group: 'mode' | 'collection' | 'art' | 'mobilier' | 'bijoux';
  img: string;
  kw: string;
  title: string;
  desc: string;
  h1: string;
  lead: string;
  sections: ObjSection[];
  faq: { q: string; a: string }[];
  guides?: string[];
  related: string[];
};

export const OBJET_GROUPS: Record<Objet['group'], string> = {
  mode: 'Mode, fourrure et accessoires de luxe',
  collection: 'Monnaies, médailles et collections',
  bijoux: 'Montres, bijoux et horlogerie',
  art: 'Art, verrerie et arts décoratifs',
  mobilier: 'Mobilier, design et décoration',
};

export const OBJETS: Objet[] = [
  {
    slug: 'rachat-manteau-de-fourrure', name: 'Manteaux de fourrure', group: 'mode', img: 'fourrure',
    kw: 'rachat manteau de fourrure',
    title: 'Rachat de manteau de fourrure : vison, astrakan, renard',
    desc: 'Vendre un manteau de fourrure ancien ou vintage (vison, astrakan, renard) : estimation gratuite, critères de valeur et rachat à domicile dans le Sud-Ouest.',
    h1: 'Rachat de manteaux de fourrure',
    lead: 'Vison, astrakan, renard, castor, loutre : un manteau de fourrure de qualité garde un marché, surtout en vintage et en pièces de créateur. Nous l’estimons gratuitement et pouvons le racheter à domicile.',
    sections: [
      { h: 'Quelles fourrures et quels manteaux se revendent ?', p: ['Le marché de la fourrure d’occasion s’est déplacé vers le vintage : manteaux de vison, de ragondin, d’astrakan ou de renard des années 1950 à 1980, étoles, cols, capes, toques et manchons. Les pièces de belle coupe, de bonne peau et signées d’une maison de fourrure ou d’un couturier se vendent mieux que des modèles courants très portés.', 'Une fourrure qui n’a pas été portée depuis des années n’est pas pour autant sans valeur : c’est souvent l’état des peaux et de la doublure qui décide.'], ul: ['Vison, ragondin, loutre, castor, astrakan, renard, chinchilla', 'Manteaux, vestes, étoles, capes, cols, toques', 'Pièces de couturier ou de grande maison de fourrure', 'Fourrures vintage des années 1940 à 1980'] },
      { h: 'Ce qui fait la valeur d’un manteau de fourrure', p: ['Un expert regarde la souplesse et la densité du poil, l’état du cuir (sec ou cassant, ou souple), la doublure, l’étiquette de la maison, la coupe et la mode de l’époque. Un manteau stocké à l’abri de la lumière, de la chaleur et de l’humidité, dans une housse respirante, conserve beaucoup mieux.', 'N’envoyez pas votre manteau à nettoyer ou à réparer avant l’estimation : des soins inadaptés peuvent abîmer les peaux.'] },
      { h: 'Comment se passe l’estimation ?', p: ['Photographiez le manteau à plat, de dos, le col, la doublure, l’étiquette intérieure et les éventuels défauts. Nous vous répondons avec une première fourchette de valeur. Si le manteau est intéressant, nous nous déplaçons chez vous pour l’examiner et vous faire une proposition de rachat ferme, avec paiement direct.', 'Précision utile : certaines espèces protégées sont soumises à une réglementation stricte pour leur commerce (convention CITES). Nous vous indiquons ce qu’il est possible de vendre en toute légalité.'] },
    ],
    faq: [
      { q: 'Un vieux manteau de fourrure peut-il encore se vendre ?', a: 'Oui, notamment les pièces vintage de qualité, en bon état de peau et de doublure. Une estimation à partir de photographies permet de savoir si cela vaut la peine.' },
      { q: 'Faut-il faire nettoyer la fourrure avant de la vendre ?', a: 'Non. Présentez-la telle quelle : un nettoyage mal adapté peut abîmer les peaux et faire baisser la valeur.' },
      { q: 'Rachetez-vous aussi les étoles, cols et accessoires ?', a: 'Oui : étoles, cols, toques, manchons, capes et vestes, à l’unité ou par lots.' },
    ],
    related: ['rachat-vetements-haute-couture-vintage', 'rachat-sacs-malles-maroquinerie-luxe', 'rachat-bijoux-anciens-or'],
  },
  {
    slug: 'rachat-pieces-de-monnaie-anciennes', name: 'Pièces de monnaie anciennes', group: 'collection', img: 'monnaies',
    kw: 'rachat pièces de monnaie anciennes',
    title: 'Pièces de monnaie anciennes : estimation et rachat',
    desc: 'Vendre une collection de pièces de monnaie anciennes (francs, écus, monnaies romaines) : estimation gratuite par un expert et rachat à domicile en Sud-Ouest.',
    h1: 'Estimation et rachat de pièces de monnaie anciennes',
    lead: 'Pièces d’argent, francs, écus, monnaies romaines ou grecques, collections héritées d’un parent : une collection numismatique se valorise par un inventaire soigné, pas au poids.',
    sections: [
      { h: 'Valeur au poids ou valeur de collection ?', p: ['Une pièce peut valoir son poids de métal (or, argent) ou beaucoup plus pour sa rareté, son millésime, sa frappe et son état de conservation. Une même pièce se vend à des prix très différents selon qu’elle est usée ou presque neuve.', 'Les « lots de pièces » trouvés dans une succession cachent parfois une ou deux pièces importantes qu’un simple rachat au poids ne remarquera pas.'], ul: ['Monnaies françaises : écus, francs, 5 francs argent (Hercule, Semeuse), centimes', 'Monnaies antiques : grecques, romaines, byzantines', 'Monnaies étrangères et jetons', 'Médailles de table et de récompense'] },
      { h: 'Ce que regardent les numismates', p: ['Le millésime et l’atelier, le métal, le poids, la frappe, l’usure, les rayures, les nettoyages anciens et la patine. Les nettoyages maladroits sont le principal ennemi : une pièce frottée au produit ménager perd souvent l’essentiel de son intérêt.'], ul: ['Ne jamais nettoyer une pièce ancienne', 'Les conserver à plat, à l’abri de l’humidité', 'Garder les classeurs, albums et étiquettes d’origine', 'Noter les millésimes et les ateliers'] },
      { h: 'Vendre une collection de monnaies', p: ['Pour une collection cohérente, nous procédons à un inventaire puis à une estimation d’ensemble. Nous pouvons racheter la collection ou vous conseiller sur les pièces à confier à une vente spécialisée. Le déplacement à domicile est gratuit.'] },
    ],
    faq: [
      { q: 'Ma collection de pièces est-elle valable si elle est usée ?', a: 'Elle peut l’être : la rareté et le métal comptent autant que l’état. Seule une estimation permet de le dire pièce par pièce.' },
      { q: 'Rachetez-vous des pièces au poids ?', a: 'Nous estimons d’abord la valeur de collection. Si elle est inférieure à la valeur du métal, le rachat se fait sur la valeur du métal.' },
      { q: 'Dois-je classer ma collection avant de vous contacter ?', a: 'Non : photographiez simplement les pièces à plat, avers et revers, et indiquez leur nombre.' },
    ],
    related: ['rachat-pieces-or-napoleon-louis-d-or', 'rachat-medailles-decorations-militaires', 'rachat-timbres-cartes-postales-anciennes'],
  },
  {
    slug: 'rachat-pieces-or-napoleon-louis-d-or', name: 'Pièces en or', group: 'collection', img: 'pieces-or',
    kw: 'rachat pièces en or napoléon',
    title: 'Rachat de pièces en or : Napoléon 20 francs, Louis d’or',
    desc: 'Vendre vos pièces en or (20 francs Napoléon, Louis d’or, Vreneli, souverain) : estimation gratuite, valeur au poids ou de collection, rachat à domicile.',
    h1: 'Rachat de pièces en or : Napoléon, Louis d’or, souverains',
    lead: 'Les pièces en or de 10, 20 ou 40 francs, Louis d’or, souverains britanniques ou Vreneli suisses se négocient selon le cours de l’or, avec parfois une prime de collection. Nous distinguons les deux.',
    sections: [
      { h: 'Les pièces en or les plus courantes', p: ['Les pièces françaises de 10, 20 et 40 francs or (Napoléon, Coq, Génie, Semeuse), les Louis d’or, les souverains britanniques, les 20 francs suisses Vreneli, les 20 dollars américains ou les pièces d’autres pays sont régulièrement retrouvées dans les successions.', 'Leur valeur de base est celle de l’or contenu ; certains millésimes rares ou en très bel état atteignent des primes supplémentaires.'], ul: ['20 francs Napoléon, Coq, Génie, Semeuse', '10, 40 et 50 francs or', 'Louis d’or et pièces d’Ancien Régime', 'Souverains, Vreneli, pièces d’autres pays'] },
      { h: 'Comment éviter les mauvaises surprises', p: ['Les comptoirs d’achat d’or paient au poids, sans toujours regarder le millésime. Comparez avec une estimation de numismate. Méfiez-vous des contrefaçons : poids, dimensions, tranche et son d’une pièce vraie peuvent être contrôlés.', 'Gardez les pièces dans leur étui d’origine, sans les nettoyer ni les frotter.'] },
      { h: 'Vendre en toute sécurité', p: ['Nous nous déplaçons chez vous, pesons et examinons les pièces devant vous, puis vous remettons une proposition détaillée. Le paiement est direct. Pour les montants importants, nous vous conseillons de vous faire accompagner d’un proche ou de votre notaire.'] },
    ],
    faq: [
      { q: 'Combien vaut une pièce de 20 francs or ?', a: 'Elle vaut au moins son poids d’or au cours du jour, avec une prime possible selon le millésime et l’état. Une estimation permet de la fixer précisément.' },
      { q: 'Peut-on vendre des pièces d’or issues d’une succession ?', a: 'Oui. Gardez une trace de l’origine des pièces et rapprochez-vous de votre notaire pour la déclaration éventuelle.' },
      { q: 'Faites-vous des estimations pour de petits lots ?', a: 'Oui, quelle que soit la quantité.' },
    ],
    related: ['rachat-pieces-de-monnaie-anciennes', 'rachat-bijoux-anciens-or', 'rachat-medailles-decorations-militaires'],
  },
  {
    slug: 'rachat-medailles-decorations-militaires', name: 'Médailles et décorations', group: 'collection', img: 'medailles',
    kw: 'rachat médailles militaires anciennes',
    title: 'Médailles et décorations anciennes : estimation et rachat',
    desc: 'Estimation de médailles militaires, Légion d’honneur, décorations et insignes anciens issus d’une succession : critères de valeur et rachat à domicile.',
    h1: 'Médailles, décorations et insignes anciens',
    lead: 'Médaille militaire, Légion d’honneur, croix de guerre, ordres étrangers, insignes et souvenirs militaires : ces objets ont un public de collectionneurs, et nous les estimons avec respect.',
    sections: [
      { h: 'Ce que recherchent les collectionneurs', p: ['Médailles françaises et étrangères du XIXe et du XXe siècle, ordres et décorations avec rubans et boîtes d’origine, brevets, diplômes, képis, insignes de régiments, souvenirs de campagne. Les pièces documentées (nom du titulaire, citation, brevet) sont les plus intéressantes.'], ul: ['Légion d’honneur, médaille militaire, croix de guerre', 'Médailles du travail et de récompense (valeur plus modeste)', 'Insignes, boutons, coiffures, épaulettes', 'Documents : brevets, citations, photographies'] },
      { h: 'Un sujet qui demande du tact', p: ['Ces objets appartiennent à une histoire familiale. Nous prenons le temps d’écouter l’histoire et de documenter la pièce. Certains objets de l’époque de conflits récents peuvent être soumis à des restrictions de commerce ou de conservation, que nous vous indiquons.'] },
      { h: 'Estimer et vendre', p: ['Envoyez des photographies de l’avers, du revers, de la tranche, du ruban et de l’écrin. Nous vous répondons avec une première estimation. Si l’objet est intéressant, nous nous déplaçons pour l’examiner.'] },
    ],
    faq: [
      { q: 'Les médailles du travail ont-elles de la valeur ?', a: 'Elles sont très répandues et valent généralement peu individuellement, mais certaines séries ou lots peuvent intéresser un collectionneur.' },
      { q: 'Peut-on vendre la Légion d’honneur d’un parent décédé ?', a: 'La vente d’insignes est encadrée : rapprochez-vous de votre notaire. Nous vous expliquons les règles applicables lors de l’estimation.' },
    ],
    related: ['rachat-pieces-de-monnaie-anciennes', 'rachat-livres-anciens-reliures', 'rachat-timbres-cartes-postales-anciennes'],
  },
  {
    slug: 'rachat-verrerie-art-galle-daum', name: 'Verrerie Art nouveau (Gallé, Daum)', group: 'art', img: 'verrerie-art',
    kw: 'estimation vase Gallé Daum',
    title: 'Vase Gallé, Daum, Lalique : estimation de verrerie d’art',
    desc: 'Estimer un vase Gallé, Daum, Lalique ou une pâte de verre Art nouveau et Art déco : signatures, techniques, valeur et rachat à domicile en Sud-Ouest.',
    h1: 'Estimation de verrerie d’art : Gallé, Daum, Lalique',
    lead: 'Vases, lampes, coupes et pâtes de verre signés Gallé, Daum, Lalique, Schneider ou Muller frères : la verrerie d’art Art nouveau et Art déco est l’un des marchés les plus actifs de l’antiquité.',
    sections: [
      { h: 'Les signatures à rechercher', p: ['Les pièces de verrerie d’art sont presque toujours signées en réserve, gravées à la pointe ou moulées dans la pâte : Gallé (étoile ou signature en camée), Daum Nancy (croix de Lorraine), Lalique (signature gravée ou moulée), Schneider, Muller frères, Legras, Argy-Rousseau.', 'Regardez le dessous et la base, mais aussi le col ou le côté, là où la signature est souvent discrète.'], ul: ['Gallé : camée, soufflé-moulé, marqueterie de verre', 'Daum : pâte de verre, dégagé à l’acide', 'Lalique : verre moulé-pressé, flacons, vases, pendentifs', 'Schneider, Muller, Legras, Argy-Rousseau'] },
      { h: 'Ce qui fait varier le prix', p: ['La signature, la technique (camée multicouche, pâte de verre), le décor, la taille, la rareté du modèle et surtout l’état : un éclat, un fêle ou un col meulé réduisent fortement la valeur. Des reproductions tardives portent parfois des signatures imitées.'] },
      { h: 'Estimer sans manipuler', p: ['Ne nettoyez pas la pièce et ne la manipulez pas inutilement. Photographiez-la sous plusieurs angles, avec la signature en gros plan, et contactez-nous. Nous nous déplaçons pour une expertise sur place et pouvons racheter la pièce.'] },
    ],
    faq: [
      { q: 'Comment reconnaître un vrai Gallé ?', a: 'Par la signature, la technique et la qualité du décor. Les imitations sont nombreuses : l’examen par un expert est indispensable.' },
      { q: 'Une pièce ébréchée garde-t-elle de la valeur ?', a: 'Oui pour une pièce importante, mais l’éclat réduit le prix de façon sensible.' },
    ],
    related: ['rachat-luminaires-lustres-anciens', 'rachat-porcelaine-chinoise-art-asiatique', 'rachat-miroirs-anciens-trumeaux'],
  },
  {
    slug: 'rachat-livres-anciens-reliures', name: 'Livres anciens', group: 'art', img: 'livres-anciens',
    kw: 'estimation livres anciens',
    title: 'Livres anciens : estimation, rachat de bibliothèques',
    desc: 'Estimer et vendre des livres anciens, éditions originales, reliures, atlas et bibliothèques héritées : critères de valeur et rachat à domicile en Sud-Ouest.',
    h1: 'Estimation et rachat de livres anciens',
    lead: 'Éditions originales, livres du XVIe au XIXe siècle, reliures, atlas, gravures, bibliothèques de château ou de notaire : un livre ancien se juge à son édition, à son état et à sa reliure.',
    sections: [
      { h: 'Les livres qui se revendent', p: ['Livres imprimés avant 1800, éditions originales d’auteurs reconnus, ouvrages illustrés, atlas, récits de voyage, livres d’heures, ouvrages scientifiques et reliures décorées. Les bibliothèques complètes de maisons de famille valent souvent plus réunies que dispersées.'], ul: ['Livres du XVIe au XVIIIe siècle', 'Éditions originales XIXe et XXe siècles', 'Atlas, cartes, gravures, livres illustrés', 'Reliures signées ou décorées'] },
      { h: 'Ce que regarde le libraire expert', p: ['L’édition (première ou courante), la rareté, la complétude (planches, cartes), l’état de la reliure et du papier (rousseurs, mouillures), les dédicaces, envois ou ex-libris. Un livre jauni peut valoir beaucoup, un livre plus récent en parfait état peut ne rien valoir.'] },
      { h: 'Ce qu’il ne faut pas faire', p: ['Ne collez pas, ne nettoyez pas et ne restaurez pas vous-même. Évitez l’humidité et la lumière. Photographiez la page de titre, la reliure et les planches principales.'] },
    ],
    faq: [
      { q: 'Mes vieux livres ont-ils de la valeur ?', a: 'Cela dépend de l’édition et de l’état. Les ouvrages antérieurs à 1800, illustrés ou en édition originale sont les plus intéressants.' },
      { q: 'Reprenez-vous une bibliothèque complète ?', a: 'Oui, après inventaire, avec enlèvement et paiement direct.' },
    ],
    related: ['rachat-timbres-cartes-postales-anciennes', 'rachat-instruments-marine-scientifiques', 'rachat-medailles-decorations-militaires'],
  },
  {
    slug: 'rachat-timbres-cartes-postales-anciennes', name: 'Cartes postales et timbres', group: 'collection', img: 'cartes-postales',
    kw: 'rachat cartes postales anciennes collection',
    title: 'Cartes postales anciennes et timbres : estimation, rachat',
    desc: 'Vendre une collection de cartes postales anciennes, de timbres, d’affiches et de papiers anciens : critères de valeur et rachat à domicile en Sud-Ouest.',
    h1: 'Cartes postales anciennes, timbres et papiers de collection',
    lead: 'Cartes postales de villes et de villages, cartes animées, timbres, lettres, affiches et ephemera : la cartophilie et la philatélie restent des passions actives, surtout pour les pièces locales.',
    sections: [
      { h: 'Ce qui intéresse les collectionneurs', p: ['Les cartes postales anciennes de villages, de commerces, de fêtes, de marchés, de gares ou de scènes animées intéressent particulièrement les collectionneurs locaux. Les timbres, les lettres avec cachets, les enveloppes de première date et les séries complètes se vendent selon leur rareté.'], ul: ['Cartes postales photographiques et animées avant 1930', 'Cartes de communes du Sud-Ouest, vues rares', 'Timbres, lettres, oblitérations, séries', 'Affiches, étiquettes, publicités anciennes'] },
      { h: 'La valeur se joue au détail', p: ['Pour les cartes : rareté du sujet, animation, qualité de la photographie, circulation. Pour les timbres : pays, année, état de la gomme, centrage, oblitération. Les collections complètes sont plus faciles à valoriser que des vrac.'] },
      { h: 'Comment faire estimer', p: ['Gardez les albums, classeurs et boîtes d’origine. Photographiez quelques pages et indiquez le nombre de pièces. Nous nous déplaçons pour examiner les collections volumineuses.'] },
    ],
    faq: [
      { q: 'Mes vieilles cartes postales valent-elles quelque chose ?', a: 'Beaucoup valent peu à l’unité, mais les vues rares ou locales, bien conservées, peuvent intéresser. L’estimation de l’ensemble le dit.' },
      { q: 'Faut-il trier avant de vous contacter ?', a: 'Non : montrez-nous simplement l’ensemble.' },
    ],
    related: ['rachat-livres-anciens-reliures', 'rachat-pieces-de-monnaie-anciennes', 'rachat-jouets-anciens-poupees'],
  },
  {
    slug: 'rachat-porcelaine-chinoise-art-asiatique', name: 'Art asiatique', group: 'art', img: 'art-asiatique',
    kw: 'estimation porcelaine chinoise ancienne',
    title: 'Porcelaine chinoise et art asiatique : estimation, rachat',
    desc: 'Estimer un vase chinois, un jade, un bronze ou une porcelaine bleu et blanc : marques, époques, copies et valeur. Rachat à domicile dans le Sud-Ouest.',
    h1: 'Estimation de porcelaine chinoise et d’art asiatique',
    lead: 'Vases cornet, potiches, porcelaines de la Compagnie des Indes, jades, laques, bronzes et netsuke : l’art asiatique est un marché actif, mais où les copies abondent. Une expertise est indispensable.',
    sections: [
      { h: 'Un marché exigeant', p: ['Le marché asiatique est porté par des acheteurs internationaux. Il est aussi l’un des plus piégés : les copies des XIXe et XXe siècles reproduisent des marques anciennes. Une marque ne prouve pas l’époque ; on la lit avec la pâte, la couverte, le décor et l’usure.'], ul: ['Porcelaines bleu et blanc, famille rose, famille verte', 'Vases, potiches, brûle-parfums', 'Jades, ivoires anciens soumis à réglementation, laques', 'Bronzes, netsuke, estampes japonaises'] },
      { h: 'Ce qui détermine le prix', p: ['L’époque, la qualité du décor, la taille, l’état (fêlures, restaurations), la provenance. Les pièces issues d’anciennes collections françaises, avec inventaire ou étiquette, ont un meilleur historique.', 'Les objets en ivoire sont soumis à une réglementation stricte : nous vous expliquons ce qui peut être vendu.'] },
      { h: 'Faire estimer sans prendre de risque', p: ['Photographiez la pièce entière, le dessous, la marque, le col et le décor. Évitez de la déplacer. Nous vous répondons puis, si nécessaire, venons l’examiner chez vous.'] },
    ],
    faq: [
      { q: 'Mon vase chinois est-il ancien ?', a: 'Seul un examen de la pâte, du décor et de l’usure permet de dater. La marque seule ne suffit pas.' },
      { q: 'Achetez-vous des pièces ébréchées ?', a: 'Oui, avec une décote proportionnée à l’importance de l’accident.' },
    ],
    related: ['rachat-verrerie-art-galle-daum', 'rachat-miroirs-anciens-trumeaux', 'rachat-luminaires-lustres-anciens'],
  },
  {
    slug: 'rachat-instruments-marine-scientifiques', name: 'Instruments de marine et scientifiques', group: 'collection', img: 'instruments-marine',
    kw: 'estimation sextant ancien instruments de marine',
    title: 'Sextant, compas, baromètre : instruments anciens à estimer',
    desc: 'Estimer et vendre un sextant, un compas, un baromètre ou un instrument scientifique ancien : critères de valeur et rachat à domicile sur la côte Atlantique.',
    h1: 'Instruments de marine et instruments scientifiques anciens',
    lead: 'Sextants, octants, compas de marine, longues-vues, baromètres, microscopes, instruments d’optique : un patrimoine particulièrement présent sur l’Atlantique et les ports du Sud-Ouest.',
    sections: [
      { h: 'Les instruments recherchés', p: ['Sur la façade atlantique, de La Rochelle à Bayonne, les maisons d’armateurs, de capitaines et de négociants ont conservé de nombreux instruments de navigation. Ils intéressent collectionneurs, décorateurs et musées.'], ul: ['Sextants, octants, compas, loch, chronomètres de marine', 'Longues-vues, jumelles, télescopes', 'Baromètres, thermomètres, hygromètres', 'Microscopes, instruments de physique et d’optique'] },
      { h: 'Valeur et authenticité', p: ['La signature du fabricant, la qualité du laiton et des graduations, la présence de la boîte d’origine, du certificat ou du carnet comptent beaucoup. Les copies décoratives modernes sont nombreuses et se distinguent par leurs matériaux et leur finition.'] },
      { h: 'Estimation et rachat', p: ['Photographiez l’instrument, sa boîte, sa plaque de fabricant et ses accessoires. Nous vous répondons, puis venons l’examiner sur place. Ne nettoyez pas le laiton : la patine est un atout.'] },
    ],
    faq: [
      { q: 'Mon sextant a-t-il de la valeur ?', a: 'Oui s’il est signé, complet et en bon état. La valeur dépend du fabricant et de la boîte.' },
      { q: 'Rachetez-vous aussi des maquettes de bateau ?', a: 'Oui, les maquettes anciennes et les objets de marine sont étudiés.' },
    ],
    related: ['rachat-livres-anciens-reliures', 'rachat-pendules-horloges-anciennes', 'rachat-montres-de-collection'],
  },
  {
    slug: 'rachat-montres-de-collection', name: 'Montres de collection', group: 'bijoux', img: 'montres-collection',
    kw: 'rachat montre Rolex ancienne',
    title: 'Montres de collection : Rolex, Omega, Cartier, gousset',
    desc: 'Estimer et vendre une montre de collection (Rolex, Omega, Cartier, gousset) : références, papiers, état. Rachat à domicile en Nouvelle-Aquitaine et Occitanie.',
    h1: 'Rachat de montres de collection et de montres de gousset',
    lead: 'Rolex, Omega, Longines, Jaeger-LeCoultre, Cartier, Patek Philippe, mais aussi montres de gousset et de poche : une montre ancienne vaut parfois très au-delà de l’or de son boîtier.',
    sections: [
      { h: 'Ce qui fait la valeur d’une montre', p: ['La marque, la référence, l’état d’origine du cadran, du boîtier et du mouvement, la présence de la boîte et des papiers, et l’histoire de la pièce. Une montre non remplacée, même abîmée, vaut souvent plus qu’une montre « remise à neuf ».'], ul: ['Montres de poignet de grandes marques', 'Chronographes, plongeuses, montres militaires', 'Montres de gousset en or ou en argent', 'Pendulettes et horloges de voyage'] },
      { h: 'Les erreurs à éviter', p: ['Ne faites pas remplacer le cadran ni polir le boîtier avant la vente. Gardez le bracelet, la boîte et les papiers. Méfiez-vous des rachats « au poids » sans examen : une montre de marque se vend rarement au poids.'] },
      { h: 'Estimation', p: ['Photographiez le cadran, le fond du boîtier, la signature du mouvement et les numéros. Nous vous répondons avec une première estimation puis nous nous déplaçons si la montre le justifie.'] },
    ],
    faq: [
      { q: 'Ma vieille Rolex qui ne marche plus a-t-elle de la valeur ?', a: 'Oui, souvent importante. Ne la faites pas réparer avant de la faire estimer.' },
      { q: 'Rachetez-vous des montres de gousset ?', a: 'Oui, en or, en argent ou en métal, avec ou sans marque.' },
    ],
    related: ['rachat-bijoux-anciens-or', 'rachat-pendules-horloges-anciennes', 'rachat-sacs-malles-maroquinerie-luxe'],
  },
  {
    slug: 'rachat-pendules-horloges-anciennes', name: 'Pendules et horloges', group: 'bijoux', img: 'pendule-salon',
    kw: 'estimation pendule ancienne',
    title: 'Pendule ancienne : estimation, rachat de pendules et horloges',
    desc: 'Estimer une pendule de cheminée, un cartel, une comtoise ou une pendule Napoléon III : signatures, mouvements et valeur. Rachat à domicile dans le Sud-Ouest.',
    h1: 'Estimation de pendules, cartels et horloges anciennes',
    lead: 'Pendules de cheminée en bronze doré, cartels, pendules Napoléon III en marbre, horloges comtoises et de parquet : un marché de décorateurs et de collectionneurs, avec de fortes différences de prix.',
    sections: [
      { h: 'Les modèles les plus courants', p: ['Pendules de cheminée à sujet (Napoléon III, Louis-Philippe), pendules en bronze doré Louis XV et Louis XVI, cartels muraux, pendules squelette, horloges de parquet et comtoises, régulateurs et pendulettes de voyage.'], ul: ['Pendules et garnitures de cheminée', 'Cartels et pendules murales', 'Horloges comtoises et de parquet', 'Régulateurs, pendulettes, pendules de voyage'] },
      { h: 'Ce qui détermine le prix', p: ['La signature du cadran ou du mouvement, la qualité du bronze et de la dorure, la présence de son globe ou de sa console, et le fait qu’elle soit complète. Une pendule en panne conserve sa valeur : ne la faites pas réparer avant l’estimation.'] },
      { h: 'Estimation', p: ['Photographiez la pendule de face, de profil, le cadran, le mouvement s’il est accessible et les inscriptions. Nous vous répondons et nous déplaçons si besoin. Le transport est assuré.'] },
    ],
    faq: [
      { q: 'Une pendule en panne se vend-elle ?', a: 'Oui. Évitez les réparations avant estimation.' },
      { q: 'Reprenez-vous les horloges comtoises ?', a: 'Oui, après examen, avec leur caisse et leur mouvement.' },
    ],
    related: ['rachat-montres-de-collection', 'rachat-luminaires-lustres-anciens', 'rachat-instruments-marine-scientifiques'],
  },
  {
    slug: 'rachat-design-vintage-xxe-siecle', name: 'Design vintage du XXe siècle', group: 'mobilier', img: 'design-vintage',
    kw: 'rachat mobilier vintage design',
    title: 'Mobilier design vintage : fauteuils Eames, scandinave, 50-70',
    desc: 'Vendre du mobilier design du XXe siècle (Eames, scandinave, Knoll, Paulin) : authenticité, estimation gratuite et rachat à domicile en Sud-Ouest.',
    h1: 'Rachat de mobilier design vintage du XXe siècle',
    lead: 'Fauteuils moulés, sièges scandinaves, mobilier des années 1950 à 1970, luminaires de designers : le design vintage est l’un des segments les plus actifs de la décoration.',
    sections: [
      { h: 'Les noms qui comptent', p: ['Charles et Ray Eames, Jean Prouvé, Pierre Paulin, Hans Wegner, Arne Jacobsen, Alvar Aalto, Le Corbusier, Charlotte Perriand, Knoll, Herman Miller, Cassina : leurs pièces d’époque, en particulier les éditions anciennes, sont recherchées.'], ul: ['Sièges, fauteuils, canapés', 'Tables, bureaux, buffets scandinaves', 'Luminaires de designers', 'Mobilier d’architecte, de Prouvé et de Perriand'] },
      { h: 'Éditions d’époque et rééditions', p: ['Les rééditions récentes sont nombreuses : l’édition d’origine se reconnaît à des détails de fabrication, d’étiquette et de matériaux. Les copies sans licence n’ont que peu de valeur.'] },
      { h: 'Estimation et rachat', p: ['Photographiez le meuble, le dessous, les étiquettes et estampilles. Nous nous déplaçons pour examiner les pièces importantes et pouvons racheter à domicile.'] },
    ],
    faq: [
      { q: 'Comment savoir si c’est une édition d’époque ?', a: 'Par les étiquettes, les matériaux, les assemblages et l’usure. L’examen sur place est le plus sûr.' },
      { q: 'Rachetez-vous un seul fauteuil ?', a: 'Oui.' },
    ],
    related: ['rachat-luminaires-lustres-anciens', 'rachat-miroirs-anciens-trumeaux', 'rachat-sacs-malles-maroquinerie-luxe'],
  },
  {
    slug: 'rachat-luminaires-lustres-anciens', name: 'Lustres et luminaires anciens', group: 'mobilier', img: 'bibliotheque-chateau',
    kw: 'estimation lustre ancien cristal',
    title: 'Lustre ancien : estimation de lustres, lampes et appliques',
    desc: 'Estimer et vendre un lustre en cristal, des appliques en bronze, des lampes anciennes et des luminaires Art déco : critères de valeur et rachat à domicile.',
    h1: 'Estimation de lustres, lampes et luminaires anciens',
    lead: 'Lustres à pampilles, lustres Maria-Thérèse, appliques et candélabres en bronze, lampes Art déco et luminaires de designers : un marché de décorateurs sensible à la qualité.',
    sections: [
      { h: 'Ce que nous rachetons', p: ['Lustres en cristal et en bronze, lustres à pampilles de verre, candélabres, appliques, lanternes, lampes à pétrole transformées, lampes Art nouveau et Art déco, luminaires signés.'], ul: ['Lustres cristal et bronze doré', 'Appliques et candélabres', 'Lampes Art déco, pâte de verre', 'Luminaires de designers (années 50-70)'] },
      { h: 'Critères de valeur', p: ['La qualité du bronze, le nombre et l’état des pampilles, la taille et l’électrification d’origine. Un lustre complet, sans pampilles recollées, a bien plus de valeur. Ne démontez pas le lustre avant l’estimation.'] },
      { h: 'Estimation', p: ['Photographiez le luminaire allumé et éteint, de près et en pied. Indiquez les dimensions. Nous nous déplaçons et assurons le démontage et le transport.'] },
    ],
    faq: [
      { q: 'Faut-il démonter le lustre ?', a: 'Non, nous nous en chargeons si nous le rachetons.' },
      { q: 'Des pampilles manquantes baissent-elles la valeur ?', a: 'Oui, mais on peut généralement les compléter.' },
    ],
    related: ['rachat-verrerie-art-galle-daum', 'rachat-miroirs-anciens-trumeaux', 'rachat-pendules-horloges-anciennes'],
  },
  {
    slug: 'rachat-miroirs-anciens-trumeaux', name: 'Miroirs et trumeaux anciens', group: 'mobilier', img: 'salle-chateau',
    kw: 'estimation miroir ancien doré trumeau',
    title: 'Miroir ancien et trumeau doré : estimation et rachat',
    desc: 'Estimer un miroir ancien à parecloses, un trumeau de cheminée ou une glace en bois doré : époque, mercure, sculpture. Rachat à domicile en Sud-Ouest.',
    h1: 'Estimation de miroirs anciens, trumeaux et glaces dorées',
    lead: 'Miroirs à parecloses, trumeaux de cheminée, glaces en bois doré, miroirs de style Louis XV et Louis XVI : une pièce de décor très demandée, à condition d’être ancienne et bien conservée.',
    sections: [
      { h: 'Reconnaître un miroir ancien', p: ['Une glace ancienne est plus fine et légèrement ondulée, son tain (mercure) présente des piqûres et des taches. Le cadre en bois doré (à la feuille) se distingue des dorures modernes à la bombe par la finesse de la sculpture et de la patine.'], ul: ['Miroirs à parecloses vénitiens et français', 'Trumeaux et dessus de cheminée', 'Glaces en bois doré, miroirs de style', 'Miroirs de sorcière, consoles et glaces d’entre-deux'] },
      { h: 'Ce qui fait le prix', p: ['L’époque, la dorure d’origine, la qualité de la sculpture et la présence de la glace ancienne. Les restaurations lourdes, les repeints et les cadres refaits réduisent la valeur.'] },
      { h: 'Estimation', p: ['Photographiez le miroir en entier, le cadre en détail, l’angle de la glace et le dos. Nous nous déplaçons pour l’examiner et assurons le transport avec protection.'] },
    ],
    faq: [
      { q: 'Un miroir piqué a-t-il moins de valeur ?', a: 'Non, les piqûres de mercure sont souvent signe d’ancienneté et recherchées par les décorateurs.' },
      { q: 'Rachetez-vous un trumeau trop grand ?', a: 'Oui, nous organisons son démontage et son transport.' },
    ],
    related: ['rachat-luminaires-lustres-anciens', 'rachat-verrerie-art-galle-daum', 'rachat-design-vintage-xxe-siecle'],
  },
  {
    slug: 'rachat-vetements-haute-couture-vintage', name: 'Haute couture et vêtements vintage', group: 'mode', img: 'boutique-antiquites',
    kw: 'rachat vêtements haute couture vintage',
    title: 'Haute couture et vêtements vintage : estimation et rachat',
    desc: 'Vendre des vêtements de haute couture, des robes vintage et des pièces de créateurs (Chanel, Dior, Saint Laurent) : estimation gratuite et rachat.',
    h1: 'Rachat de haute couture et de vêtements vintage',
    lead: 'Robes du soir, tailleurs de couturiers, pièces de créateurs, chapeaux, gants, châles et accessoires des années 1920 à 1990 : la mode ancienne a ses collectionneurs, ses musées et ses acheteurs.',
    sections: [
      { h: 'Quels vêtements intéressent ?', p: ['Pièces de haute couture signées ou étiquetées (maison, numéro), prêt-à-porter de créateurs des années 1960 à 1980, robes des années 1920 à 1950, dentelles, châles, accessoires, chapeaux et lingerie ancienne. L’état, la rareté et l’étiquette sont déterminants.'], ul: ['Haute couture et pièces de créateurs', 'Robes du soir et robes de mariée anciennes', 'Dentelles, broderies, châles', 'Chapeaux, gants, accessoires, manteaux'] },
      { h: 'Conserver avant de vendre', p: ['Évitez les housses plastiques et la lumière. Ne lavez pas et ne retouchez pas. Photographiez l’étiquette, la coupe, les finitions et les défauts éventuels.'] },
      { h: 'Estimation', p: ['Nous vous répondons à partir des photos et, si besoin, nous déplaçons pour examiner les vêtements. Nous pouvons aussi estimer des garde-robes entières issues de successions.'] },
    ],
    faq: [
      { q: 'Achetez-vous des robes de mariée anciennes ?', a: 'Oui, si elles sont en bon état et intéressantes par leur époque ou leur couture.' },
      { q: 'Mes vêtements sont-ils trop usés ?', a: 'Une estimation sur photos permet d’en juger. Certaines pièces, même fragiles, intéressent des collectionneurs.' },
    ],
    related: ['rachat-manteau-de-fourrure', 'rachat-sacs-malles-maroquinerie-luxe', 'rachat-bijoux-anciens-or'],
  },
  {
    slug: 'rachat-sacs-malles-maroquinerie-luxe', name: 'Sacs, malles et maroquinerie de luxe', group: 'mode', img: 'cabinet-curiosites',
    kw: 'rachat sac Hermès malle Louis Vuitton',
    title: 'Malle Louis Vuitton, sac Hermès : estimation et rachat',
    desc: 'Vendre une malle Louis Vuitton ancienne, un sac Hermès, Chanel ou Goyard, une valise ou un accessoire de luxe : estimation gratuite et rachat à domicile.',
    h1: 'Rachat de malles, sacs et maroquinerie de luxe',
    lead: 'Malles et coffres de voyage, sacs de grandes maisons, valises anciennes, ceintures et petits maroquins : la maroquinerie de luxe se revend très bien, à condition d’être authentique et de garder ses accessoires.',
    sections: [
      { h: 'Ce que nous rachetons', p: ['Malles de voyage et malles-cabines de grandes maisons, valises, sacs de maison de luxe, portefeuilles, ceintures, écharpes, foulards en soie, stylos de collection et accessoires de bureau.'], ul: ['Malles et valises anciennes (Louis Vuitton, Goyard, Moynat)', 'Sacs et petits maroquins de grandes maisons', 'Foulards, carrés de soie, ceintures', 'Stylos, briquets et accessoires de collection'] },
      { h: 'Authenticité et état', p: ['Les contrefaçons sont nombreuses. L’authentification se fait par les matériaux, les coutures, la quincaillerie, les numéros et les marquages. Gardez les boîtes, sacs de protection, certificats et factures : ils augmentent la valeur.'] },
      { h: 'Estimation', p: ['Photographiez l’objet de face, de dos, l’intérieur, la quincaillerie, les marquages et les défauts. Nous vous répondons et nous déplaçons pour les pièces importantes. Le transport est assuré.'] },
    ],
    faq: [
      { q: 'Une vieille malle abîmée a-t-elle de la valeur ?', a: 'Souvent oui, surtout si elle est authentique et complète. N’y touchez pas avant l’estimation.' },
      { q: 'Authentifiez-vous les sacs ?', a: 'Nous les examinons et vous disons si nous pouvons les racheter.' },
    ],
    related: ['rachat-vetements-haute-couture-vintage', 'rachat-manteau-de-fourrure', 'rachat-montres-de-collection'],
  },
  {
    slug: 'rachat-jouets-anciens-poupees', name: 'Jouets anciens et poupées', group: 'collection', img: 'bronze-sculpture',
    kw: 'rachat jouets anciens poupées',
    title: 'Jouets anciens, poupées Jumeau : estimation et rachat',
    desc: 'Estimer et vendre des jouets anciens, poupées Jumeau, trains miniatures et soldats de plomb : critères de valeur et rachat à domicile en Sud-Ouest.',
    h1: 'Rachat de jouets anciens et de poupées de collection',
    lead: 'Poupées de porcelaine, ours en peluche anciens, trains miniatures, soldats de plomb, jeux de société et jouets en tôle : les jouets anciens ont un marché de collectionneurs actif.',
    sections: [
      { h: 'Jouets qui se revendent', p: ['Poupées à tête biscuit des grandes manufactures (Jumeau, Bru, Steiner, SFBJ), poupées de salon, automates, ours en peluche anciens, trains Hornby et Märklin, voitures miniatures de collection, soldats de plomb, jouets en tôle lithographiée.'], ul: ['Poupées à tête biscuit et de salon', 'Trains miniatures et circuits', 'Voitures et jouets en tôle', 'Automates, peluches, théâtres miniatures'] },
      { h: 'Critères de valeur', p: ['La marque, l’âge, la rareté du modèle, la présence de la boîte d’origine, les costumes et accessoires, et l’état. Les restaurations et les pièces remplacées réduisent la valeur.'] },
      { h: 'Estimation', p: ['Photographiez le jouet complet, la marque (souvent au dos de la tête ou sous la base), la boîte et les accessoires. Nous vous répondons puis venons examiner si besoin.'] },
    ],
    faq: [
      { q: 'Ma poupée ancienne a-t-elle de la valeur ?', a: 'Cela dépend de la manufacture, de la tête et de l’état. La marque au dos de la tête est la première chose à photographier.' },
      { q: 'Reprenez-vous des collections de trains miniatures ?', a: 'Oui, après inventaire.' },
    ],
    related: ['rachat-timbres-cartes-postales-anciennes', 'rachat-pieces-de-monnaie-anciennes', 'rachat-livres-anciens-reliures'],
  },
  {
    slug: 'rachat-bijoux-anciens-or', name: 'Bijoux anciens en or', group: 'bijoux', img: 'montre-gousset',
    kw: 'rachat bijoux anciens or',
    title: 'Rachat de bijoux anciens en or : bagues, broches, parures',
    desc: 'Vendre des bijoux anciens en or, argent ou platine (bagues, broches, or cassé) : poinçons, valeur au poids ou de collection, rachat à domicile.',
    h1: 'Rachat de bijoux anciens en or, argent et platine',
    lead: 'Bagues, alliances, chaînes, broches, bracelets, parures et or cassé : un bijou ancien peut valoir son poids d’or, ou beaucoup plus pour son travail, sa signature ou ses pierres.',
    sections: [
      { h: 'Du poids à la valeur de collection', p: ['Les comptoirs d’or paient au poids. Un bijou signé, d’époque Art nouveau, Art déco ou XIXe siècle, serti de belles pierres, vaut généralement bien plus. Notre estimation sépare la valeur du métal et la valeur de travail.'], ul: ['Or 18 carats (tête d’aigle), argent (Minerve), platine (tête de chien)', 'Bagues, broches, colliers, bracelets, parures', 'Diamants, perles fines, pierres de couleur', 'Or cassé, alliances, médailles religieuses'] },
      { h: 'Quelques réflexes', p: ['Ne faites pas fondre vos bijoux anciens et ne les faites pas nettoyer à l’aveugle. Gardez écrins, certificats et factures. Photographiez les poinçons de près.'] },
      { h: 'Vendre à domicile', p: ['Nous venons chez vous, examinons et pesons les bijoux devant vous, puis vous remettons une proposition détaillée. Le paiement est direct.'] },
    ],
    faq: [
      { q: 'Achetez-vous de l’or cassé ?', a: 'Oui, après pesée et examen devant vous.' },
      { q: 'Mes bijoux de famille valent-ils plus que le poids d’or ?', a: 'C’est possible si la pièce est ancienne, signée ou sertie de belles pierres. L’estimation le précise.' },
    ],
    guides: ['vendre-bijoux-anciens-or-poincons'],
    related: ['rachat-pieces-or-napoleon-louis-d-or', 'rachat-montres-de-collection', 'rachat-sacs-malles-maroquinerie-luxe'],
  },
];

export const objet = (slug: string) => OBJETS.find((o) => o.slug === slug)!;
