/**
 * Guides « Conseils » : contenu informationnel pensé pour capter les recherches des héritiers,
 * des particuliers et des collectionneurs, puis les amener vers la demande d'estimation gratuite.
 * Chaque guide cible une requête principale (kw) et des requêtes secondaires.
 */
export type GuideSection = { h: string; p: string[]; ul?: string[] };
export type Guide = {
  slug: string;
  kw: string;
  cluster: 'succession' | 'meubles' | 'objets' | 'vente' | 'estimation';
  title: string;
  desc: string;
  h1: string;
  lead: string;
  minutes: number;
  img?: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  related: string[];
  service?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: 'que-faire-des-meubles-apres-un-deces',
    kw: 'que faire des meubles après un décès',
    cluster: 'succession',
    title: 'Que faire des meubles après un décès ? Le guide complet',
    desc: 'Vider une maison après un décès : que faire avant de jeter, comment trier, faire estimer et vendre les meubles anciens et objets d’art d’une succession.',
    h1: 'Que faire des meubles après un décès ?',
    lead: 'Entre le deuil, les démarches et le temps qui presse, le contenu d’une maison peut sembler un fardeau. Pourtant, c’est souvent là que se cachent des pièces de valeur. Voici l’ordre à suivre pour ne rien perdre.',
    minutes: 7,
    sections: [
      {
        h: 'Ne jetez rien avant d’avoir parlé au notaire',
        p: [
          'Le mobilier fait partie de la succession : tant que le notaire n’a pas indiqué qu’il peut être dispersé, il faut le conserver. Si plusieurs héritiers sont concernés, tout déplacement ou toute vente doit faire l’objet d’un accord de chacun, idéalement consigné par écrit.',
          'Demandez au notaire s’il souhaite un inventaire et une estimation du mobilier. Dans bien des dossiers, une estimation écrite par un professionnel facilite la déclaration de succession et évite les désaccords entre héritiers.',
        ],
      },
      {
        h: 'Faire le tri : trois piles',
        p: [
          'Un tri efficace sépare les objets en trois catégories : ce que la famille souhaite garder, ce qui présente une valeur marchande ou artistique potentielle, et ce qui n’a d’intérêt ni sentimental ni financier. La deuxième pile est celle qu’il ne faut surtout pas brader.',
          'En cas de doute, photographiez et mettez de côté. Une commode en noyer, une pendule qui ne marche plus, un tableau sans signature visible, une ménagère d’argent ou un vase asiatique peuvent valoir bien davantage que ce que l’on imagine.',
        ],
        ul: ['Mobilier ancien (commodes, armoires, bureaux, secrétaires, buffets)', 'Tableaux, gravures, dessins, cadres dorés', 'Bronzes, sculptures, pendules, bijoux, montres', 'Argenterie, porcelaines, cristal, tapis, livres anciens'],
      },
      {
        h: 'Faire estimer avant de vendre ou de débarrasser',
        p: [
          'Les entreprises de débarras proposent un prix pour vider l’ensemble, sans tenir compte de la valeur des pièces. À l’inverse, un antiquaire ou un expert examine les objets un par un, vous remet une estimation et peut racheter ce qui présente un intérêt.',
          'L’estimation à partir de photographies est gratuite et sans engagement : elle suffit souvent à savoir si le contenu mérite une visite. Si c’est le cas, l’expert se déplace sur place pour voir les objets dans leur contexte.',
        ],
      },
      {
        h: 'Les solutions pour vendre le mobilier d’une succession',
        p: [
          'Plusieurs voies existent : le rachat direct par un antiquaire (rapide, paiement immédiat), la vente aux enchères (plus longue, avec des frais), le dépôt-vente ou la vente entre particuliers (exigeants en temps). Pour un volume important, le rachat en bloc avec enlèvement évite de multiplier les démarches.',
          'Quelle que soit l’option retenue, demandez toujours une estimation écrite et comparez : une proposition de rachat sérieuse doit être détaillée objet par objet.',
        ],
      },
      {
        h: 'Débarrasser le reste, sans précipitation',
        p: [
          'Une fois les objets de valeur identifiés et vendus ou répartis, il reste le mobilier courant, la vaisselle, le linge. Ce reste peut être donné, confié à une association ou à une entreprise de débarras. Il est préférable de procéder dans cet ordre : estimer, répartir, vendre, puis débarrasser.',
        ],
      },
    ],
    faq: [
      { q: 'Combien de temps ai-je pour vider la maison d’un défunt ?', a: 'Il n’y a pas de délai universel : tout dépend de la situation du logement (propriété, location, vente en cours) et des consignes du notaire. Si le bien est loué, le bailleur peut fixer des délais ; si la maison est mise en vente, l’acheteur attend généralement un logement libre.' },
      { q: 'Un antiquaire peut-il racheter tout le contenu d’une maison ?', a: 'Oui, après inventaire et estimation, un antiquaire peut racheter les pièces d’intérêt, voire l’ensemble, et organiser l’enlèvement. Les objets sans valeur marchande restent à la charge des héritiers ou sont traités à part.' },
    ],
    related: ['estimer-le-mobilier-d-une-succession', 'ou-vendre-des-meubles-anciens', 'photographier-ses-objets-pour-une-estimation'],
    service: 'rachat-succession',
  },
  {
    slug: 'estimer-le-mobilier-d-une-succession',
    kw: 'estimation mobilier succession',
    cluster: 'succession',
    title: 'Estimer le mobilier d’une succession : mode d’emploi',
    desc: 'Comment faire estimer les meubles et objets d’art d’une succession : inventaire, estimation écrite, forfait, rôle du notaire et de l’expert. Les points clés.',
    h1: 'Estimer le mobilier d’une succession',
    lead: 'Meubles, tableaux, bijoux, argenterie : le mobilier d’un défunt entre dans l’actif successoral. Savoir comment l’évaluer permet d’éviter les litiges entre héritiers et de déclarer une valeur juste.',
    minutes: 6,
    sections: [
      {
        h: 'Pourquoi évaluer le mobilier ?',
        p: [
          'Les meubles meublants, les objets d’art et les collections font partie du patrimoine transmis. Leur valeur intervient dans la déclaration de succession et dans le partage entre héritiers. Une estimation sérieuse sert de référence commune et réduit les risques de contestation.',
        ],
      },
      {
        h: 'Forfait de 5 % ou inventaire détaillé ?',
        p: [
          'À défaut d’inventaire, l’administration fiscale retient un forfait pour les meubles meublants, calculé sur l’actif de la succession. Lorsque le mobilier comprend des pièces de valeur (tableaux, bronzes, bijoux, belles pièces d’ébénisterie), un inventaire détaillé avec estimation écrite peut être plus juste, et parfois plus favorable. Votre notaire vous indiquera la solution adaptée à votre dossier : ce guide ne remplace pas son conseil.',
        ],
      },
      {
        h: 'Qui peut estimer ? Antiquaire, expert, commissaire-priseur',
        p: [
          'Un antiquaire ou un expert en objets d’art connaît le marché réel de chaque famille d’objets. Un commissaire-priseur peut aussi dresser un inventaire et organiser une vente publique. L’important est que l’estimation soit écrite, détaillée objet par objet, datée et signée.',
        ],
        ul: ['Description de chaque objet (matière, époque, état, dimensions)', 'Valeur estimée ou fourchette de valeur', 'Photographies associées', 'Mention de l’expert et date de l’estimation'],
      },
      {
        h: 'Déroulé d’une estimation à domicile',
        p: [
          'La première étape est un échange à partir de photographies. Une visite sur place permet ensuite d’examiner les objets, de repérer les signatures, les estampilles, les marques et les accidents. L’inventaire est remis par écrit, utilisable par le notaire et par les héritiers.',
          'Si vous souhaitez vendre, une proposition de rachat ferme peut être formulée en parallèle, objet par objet ou en bloc, sans obligation de l’accepter.',
        ],
      },
    ],
    faq: [
      { q: 'L’estimation de succession est-elle payante ?', a: 'Chez Les Antiquités de Benjamin, l’estimation à partir de photographies et le déplacement pour une première visite sont gratuits et sans engagement. Un rapport d’expertise détaillé peut être produit sur demande pour le notaire ou l’assurance.' },
      { q: 'Faut-il tout faire estimer ?', a: 'Non. Il suffit de présenter les pièces susceptibles d’avoir une valeur. En cas de doute, une première série de photographies permet d’orienter l’expert.' },
    ],
    related: ['que-faire-des-meubles-apres-un-deces', 'combien-vaut-un-meuble-ancien', 'vendre-une-collection-heritee'],
    service: 'inventaire-succession-estimation',
  },
  {
    slug: 'combien-vaut-un-meuble-ancien',
    kw: 'combien vaut un meuble ancien',
    cluster: 'meubles',
    title: 'Combien vaut un meuble ancien ? Les critères de valeur',
    desc: 'Valeur d’un meuble ancien : époque, estampille, essence de bois, état, provenance. Ce qui fait vraiment le prix d’une commode, d’une armoire ou d’un bureau.',
    h1: 'Combien vaut un meuble ancien ?',
    lead: 'Hériter d’une commode ou d’une armoire ne signifie pas forcément détenir un trésor, ni une pièce sans valeur. Voici les critères que regarde un expert pour fixer le prix d’un meuble.',
    minutes: 6,
    sections: [
      {
        h: 'L’époque et le style : meuble d’époque ou meuble de style ?',
        p: [
          'Un meuble d’époque a été fabriqué au moment du style qu’il représente (Louis XV, Louis XVI, Directoire, Empire…). Un meuble de style en est une reproduction postérieure, souvent du XIXe ou du début du XXe siècle. La différence de valeur peut être considérable.',
        ],
      },
      {
        h: 'La qualité de fabrication et les matériaux',
        p: [
          'Un expert observe les assemblages (queues d’aronde taillées à la main, irrégulières, contre assemblages mécaniques réguliers), les fonds de tiroirs, la patine du bois, les ferrures et les placages. Les essences nobles (noyer, acajou, palissandre, bois de rose) et les marqueteries soignées valent plus que des bois ordinaires.',
        ],
        ul: ['Estampille d’ébéniste ou de menuisier (surtout pour les pièces parisiennes du XVIIIe siècle)', 'Marqueterie, bronzes dorés, dessus de marbre d’origine', 'Absence de restaurations lourdes et de transformations'],
      },
      {
        h: 'L’état et la provenance',
        p: [
          'Un meuble dans son état d’origine, avec sa patine, est souvent plus recherché qu’un meuble entièrement décapé et reverni. Une provenance documentée (collection, château, inventaire familial) augmente l’intérêt.',
        ],
      },
      {
        h: 'Un marché devenu sélectif',
        p: [
          'Le marché du mobilier ancien privilégie aujourd’hui les pièces de grande qualité, les modèles rares et les meubles de beau dessin. Le mobilier courant, très présent, s’échange à des niveaux plus modestes. C’est pourquoi une estimation réaliste, établie par un professionnel, est indispensable avant toute décision.',
        ],
      },
    ],
    faq: [
      { q: 'Une armoire ancienne se vend-elle bien ?', a: 'Cela dépend de sa région, de son époque et de sa qualité. Les armoires provinciales de belle facture trouvent preneur, mais les modèles volumineux et courants sont plus difficiles à placer. Une estimation permet de situer votre pièce.' },
      { q: 'Dois-je nettoyer ou cirer mon meuble avant l’estimation ?', a: 'Non. Mieux vaut le présenter tel quel : une intervention maladroite peut effacer la patine et diminuer sa valeur.' },
    ],
    related: ['reconnaitre-un-meuble-d-epoque', 'restaurer-avant-de-vendre-un-meuble-ancien', 'ou-vendre-des-meubles-anciens'],
    service: 'vendre-meubles-anciens',
  },
  {
    slug: 'reconnaitre-un-meuble-d-epoque',
    kw: 'reconnaître un meuble d’époque Louis XV',
    cluster: 'meubles',
    title: 'Reconnaître un meuble d’époque : Louis XV, Louis XVI…',
    desc: 'Comment reconnaître un meuble Louis XV, Louis XVI ou Empire : formes, ornements, assemblages, estampilles et signes d’authenticité. Guide pratique illustré.',
    h1: 'Reconnaître un meuble d’époque',
    lead: 'Courbes sinueuses ou lignes droites, bronzes dorés ou marqueterie : chaque style a ses codes. Apprenez à repérer les principaux indices avant de faire estimer votre meuble.',
    minutes: 6,
    sections: [
      {
        h: 'Le style Louis XV : le règne de la courbe',
        p: [
          'Le style Louis XV (première moitié du XVIIIe siècle) se reconnaît à ses lignes galbées, ses pieds cambrés, ses coquilles, ses feuillages et ses motifs rocaille. Les commodes sont souvent « en arbalète » ou « galbées », parfois garnies de bronzes dorés et de dessus de marbre.',
        ],
      },
      {
        h: 'Le style Louis XVI : retour à la ligne droite',
        p: [
          'Sous Louis XVI, les formes s’assagissent : pieds droits en gaine, cannelures, frises de perles, rosaces. La symétrie domine et le décor puise dans l’Antiquité. Les placages restent soignés, avec des marqueteries de fleurs ou de motifs géométriques.',
        ],
      },
      {
        h: 'Directoire, Empire, Restauration',
        p: [
          'Le Directoire et l’Empire affichent des lignes sobres, des colonnes, des griffes de lion, des palmettes et des bronzes en relief. L’acajou domine. La Restauration et le Louis-Philippe adoucissent ces formes, avec des bois clairs et des tiroirs plus généreux.',
        ],
      },
      {
        h: 'Les signes qui trahissent un meuble ancien',
        p: [
          'Au-delà du style, un expert regarde les traces d’outils, les chevilles, les clous forgés, la couleur du bois à l’intérieur des tiroirs, la patine des fonds et l’usure naturelle aux endroits sollicités. Une estampille ou un numéro d’atelier est un indice précieux, sans être systématique.',
        ],
        ul: ['Assemblages à queue d’aronde irréguliers', 'Usure cohérente des pieds, tiroirs et poignées', 'Bois d’origine dans les parties cachées', 'Bronzes et serrures anciens, pas des copies industrielles'],
      },
    ],
    faq: [
      { q: 'Un meuble « de style Louis XV » est-il ancien ?', a: 'Pas forcément : il peut s’agir d’une copie du XIXe ou du XXe siècle. Seul l’examen des assemblages, des matériaux et de l’usure permet de dater précisément.' },
      { q: 'Peut-on dater un meuble à partir d’une photo ?', a: 'On peut formuler une première hypothèse à partir de bonnes photographies (vue d’ensemble, détails, intérieur des tiroirs, dessous). La datation précise exige souvent un examen sur place.' },
    ],
    related: ['combien-vaut-un-meuble-ancien', 'photographier-ses-objets-pour-une-estimation'],
    service: 'vendre-meubles-anciens',
  },
  {
    slug: 'ou-vendre-des-meubles-anciens',
    kw: 'vendre des meubles anciens',
    cluster: 'vente',
    title: 'Vendre des meubles anciens : antiquaire, enchères ou web ?',
    desc: 'Où et comment vendre ses meubles anciens : antiquaire, commissaire-priseur, dépôt-vente, sites en ligne. Avantages, délais, frais et pièges à éviter.',
    h1: 'Où et comment vendre des meubles anciens ?',
    lead: 'Plusieurs chemins mènent à la vente d’un meuble ancien. Le meilleur dépend de la valeur de l’objet, de votre calendrier et de l’énergie que vous souhaitez y consacrer.',
    minutes: 6,
    sections: [
      {
        h: 'Le rachat direct par un antiquaire',
        p: [
          'C’est la solution la plus rapide : après estimation, l’antiquaire vous propose un prix ferme, règle immédiatement et enlève les meubles. Pas de frais de vente, pas d’attente. Le prix tient compte de la marge de l’antiquaire, qui devra restaurer et revendre.',
        ],
      },
      {
        h: 'Les ventes aux enchères',
        p: [
          'Elles peuvent donner de bons résultats pour les pièces rares, mais comportent des frais (pour le vendeur comme pour l’acheteur), des délais (catalogue, exposition, paiement) et un risque d’invendu. Le résultat dépend de la qualité du catalogue et de la date de vente.',
        ],
      },
      {
        h: 'Le dépôt-vente et les petites annonces',
        p: [
          'Le dépôt-vente fonctionne pour des pièces de gamme moyenne, avec une commission sur le prix. Les annonces en ligne entre particuliers demandent du temps : photos, questions, visites, négociations, parfois de mauvaises surprises au moment du paiement.',
        ],
      },
      {
        h: 'Comment choisir ?',
        p: [
          'Pour un ou deux meubles de valeur, comparez une estimation écrite et une proposition de rachat. Pour le contenu d’une maison, le rachat en bloc avec enlèvement simplifie tout. Dans tous les cas, faites établir une estimation avant de prendre votre décision.',
        ],
        ul: ['Exigez une proposition détaillée objet par objet', 'Méfiez-vous des offres sans visite ni examen', 'Comparez au moins deux avis', 'Conservez une trace écrite de l’accord'],
      },
    ],
    faq: [
      { q: 'Vaut-il mieux vendre aux enchères ou à un antiquaire ?', a: 'Les enchères conviennent aux pièces rares ou très recherchées. Pour la majorité des meubles, le rachat direct par un antiquaire offre rapidité et certitude du prix.' },
      { q: 'Dois-je déplacer mes meubles pour les faire estimer ?', a: 'Non : un expert peut se déplacer chez vous. Cela permet aussi de voir les meubles dans leur environnement.' },
    ],
    related: ['combien-vaut-un-meuble-ancien', 'que-faire-des-meubles-apres-un-deces', 'restaurer-avant-de-vendre-un-meuble-ancien'],
    service: 'vendre-meubles-anciens',
  },
  {
    slug: 'restaurer-avant-de-vendre-un-meuble-ancien',
    kw: 'restaurer un meuble ancien avant de le vendre',
    cluster: 'meubles',
    title: 'Faut-il restaurer un meuble ancien avant de le vendre ?',
    desc: 'Restaurer, cirer, décaper ou laisser en l’état ? Ce qu’il faut savoir avant de vendre un meuble ancien : coûts, risques de dévaluation et bons réflexes.',
    h1: 'Faut-il restaurer un meuble ancien avant de le vendre ?',
    lead: 'La tentation de « remettre en état » avant une vente est grande. Pourtant, dans la plupart des cas, une restauration mal conduite coûte plus qu’elle ne rapporte.',
    minutes: 5,
    sections: [
      {
        h: 'La règle d’or : ne rien décaper, ne rien revernir',
        p: [
          'La patine d’un meuble ancien, faite de décennies de cire et d’usage, est l’un de ses atouts. Décaper ou revernir efface cette histoire et peut faire chuter la valeur. Mieux vaut conserver l’aspect d’origine, même terne.',
        ],
      },
      {
        h: 'Les restaurations utiles',
        p: [
          'Quelques interventions peuvent être utiles : recoller un placage soulevé, stabiliser un assemblage fragilisé, remettre une poignée. Elles doivent être réalisées par un restaurateur qualifié, avec des matériaux réversibles, et idéalement après avis d’un expert.',
        ],
      },
      {
        h: 'Quand la restauration ne se justifie pas',
        p: [
          'Pour un meuble courant, le coût de restauration dépasse souvent l’augmentation de valeur espérée. L’antiquaire, qui travaille avec ses propres restaurateurs, achète plus volontiers un meuble brut qu’un meuble « rafraîchi » sans méthode.',
        ],
        ul: ['Ne pas décaper', 'Ne pas utiliser de produits ménagers agressifs', 'Ne pas repeindre ni vernir', 'Photographier les défauts avant toute intervention'],
      },
    ],
    faq: [
      { q: 'Puis-je cirer mon meuble avant une estimation ?', a: 'Un simple dépoussiérage suffit. Évitez les cires colorées ou les produits qui masquent les défauts : l’expert préfère voir l’état réel.' },
      { q: 'Un meuble abîmé a-t-il encore de la valeur ?', a: 'Oui, si sa qualité de base est bonne. Les accidents et restaurations sont pris en compte dans l’estimation, mais ne suppriment pas l’intérêt d’une belle pièce.' },
    ],
    related: ['combien-vaut-un-meuble-ancien', 'reconnaitre-un-meuble-d-epoque'],
    service: 'vendre-meubles-anciens',
  },
  {
    slug: 'estimer-un-tableau-ancien',
    kw: 'estimer un tableau ancien',
    cluster: 'objets',
    title: 'Estimer un tableau ancien : signature, cadre, support',
    desc: 'Comment estimer un tableau ancien : signature, châssis, cachets, état de conservation, cadre doré. Ce qui fait la valeur d’une huile sur toile ou d’une gravure.',
    h1: 'Comment estimer un tableau ancien ?',
    lead: 'Une signature illisible n’est pas un verdict. Le support, la touche, le cadre et l’histoire d’un tableau en disent long sur son origine et sa valeur.',
    minutes: 6,
    sections: [
      {
        h: 'Regarder l’avant et l’arrière',
        p: [
          'Le verso d’un tableau est souvent plus parlant que le recto : étiquettes de galerie, cachets de collection, numéros d’inventaire, inscriptions au crayon ou à l’encre, type de châssis et de clous. Photographiez-le systématiquement.',
        ],
      },
      {
        h: 'La signature et l’attribution',
        p: [
          'Une signature authentique augmente la valeur, mais beaucoup d’œuvres anciennes ne sont pas signées. Un expert compare le style, la touche, les pigments et le sujet pour proposer une attribution prudente : œuvre de, atelier de, entourage de, d’après, selon la formule consacrée.',
        ],
      },
      {
        h: 'Le support, le cadre, l’état',
        p: [
          'Huile sur toile, sur panneau, sur cuivre, pastel, aquarelle, gravure : chaque technique a son marché. Le cadre ancien, en bois doré ou sculpté, peut avoir une valeur propre. L’état de conservation (soulèvements, craquelures, restaurations) influence également le prix.',
        ],
        ul: ['Ne jamais nettoyer la surface peinte', 'Éviter la lumière directe du soleil', 'Ne pas retirer le cadre ni le châssis', 'Conserver tous les papiers et étiquettes'],
      },
      {
        h: 'Quels sujets sont recherchés ?',
        p: [
          'Portraits d’époque, paysages de l’école de Barbizon, marines, natures mortes, scènes de genre, peintures orientalistes ou régionales : le marché est vaste. Pour en savoir plus, consultez notre page consacrée aux tableaux anciens.',
        ],
      },
    ],
    faq: [
      { q: 'Un tableau sans signature peut-il avoir de la valeur ?', a: 'Oui. De nombreuses œuvres anciennes ne sont pas signées. La qualité d’exécution, l’époque et l’intérêt du sujet sont déterminants.' },
      { q: 'Comment envoyer un tableau pour estimation ?', a: 'Inutile de l’envoyer : transmettez des photographies de la face, du dos, de la signature, des étiquettes et de l’éventuel cadre.' },
    ],
    related: ['photographier-ses-objets-pour-une-estimation', 'vendre-une-collection-heritee'],
    service: 'tableaux-anciens',
  },
  {
    slug: 'reconnaitre-argenterie-massive-poincons',
    kw: 'valeur argenterie poinçons',
    cluster: 'objets',
    title: 'Argenterie ancienne : reconnaître les poinçons et la valeur',
    desc: 'Argent massif ou métal argenté ? Lire les poinçons (Minerve, aigle), estimer une ménagère ou une timbale et savoir si elle se vend : le guide pratique.',
    h1: 'Reconnaître l’argenterie massive grâce aux poinçons',
    lead: 'Ménagère de mariage, timbales, théière, plats : l’argenterie familiale se transmet souvent sans que l’on sache ce qu’elle vaut. Les poinçons sont la clé.',
    minutes: 5,
    sections: [
      {
        h: 'Argent massif ou métal argenté',
        p: [
          'Un objet en argent massif porte des poinçons de garantie officiels. Le métal argenté (ou plaqué) est recouvert d’une fine couche d’argent et porte des marques de fabricant, parfois les lettres « EPNS » ou une mention « métal argenté ». Leur valeur n’est pas comparable.',
        ],
      },
      {
        h: 'Quelques poinçons français à connaître',
        p: [
          'Depuis 1838, la tête de Minerve identifie l’argent français (1er titre : 950 pour mille, 2e titre : 800 pour mille). La tête d’aigle correspond à l’or 750 pour mille et la tête de chien au platine. À côté de ces marques, on trouve le poinçon de maître de l’orfèvre, losange ou carré avec ses initiales.',
        ],
        ul: ['Minerve : argent français', 'Tête d’aigle : or 18 carats', 'Tête de chien : platine', 'Poinçon de maître : fabricant'],
      },
      {
        h: 'Poids, signature et ancienneté',
        p: [
          'La valeur d’une pièce d’argent dépend du poids de métal, mais aussi de la signature de l’orfèvre, de l’ancienneté, de l’originalité du modèle et de l’état. Un service complet, dans son écrin d’origine, vaut mieux que des couverts dépareillés.',
        ],
      },
      {
        h: 'Que faire avant de vendre ?',
        p: [
          'Ne frottez pas vos pièces avec des produits abrasifs : la patine et les gravures sont à préserver. Photographiez les poinçons de près, comptez les pièces, regroupez le service et faites établir une estimation avant d’accepter une offre au poids.',
        ],
      },
    ],
    faq: [
      { q: 'Mon argenterie vaut-elle plus que le poids d’argent ?', a: 'Oui, si l’orfèvre est reconnu ou la pièce ancienne et rare. Sinon, le prix suit plutôt le cours du métal.' },
      { q: 'Peut-on vendre une ménagère dépareillée ?', a: 'Oui, mais elle vaut moins qu’un service complet. L’estimation précise les possibilités.' },
    ],
    related: ['valeur-porcelaine-ancienne-marques', 'vendre-bijoux-anciens-or-poincons'],
    service: 'porcelaines-arts-de-la-table',
  },
  {
    slug: 'vendre-bijoux-anciens-or-poincons',
    kw: 'vendre bijoux anciens',
    cluster: 'objets',
    title: 'Vendre des bijoux anciens : or, pierres, poinçons, prix',
    desc: 'Vendre un bijou ancien en or : lire les poinçons, distinguer valeur au poids et valeur de collection, choisir le bon acheteur. Conseils d’un expert.',
    h1: 'Vendre des bijoux anciens : ce qu’il faut savoir',
    lead: 'Bague de famille, broche Art nouveau, montre de gousset : un bijou ancien peut valoir bien plus que son poids d’or. Voici comment ne pas se tromper.',
    minutes: 5,
    sections: [
      {
        h: 'Valeur au poids ou valeur de collection ?',
        p: [
          'Les comptoirs d’achat d’or paient un bijou à son poids de métal. Un bijou signé, d’une époque recherchée (Art nouveau, Art déco, joaillerie du XIXe siècle) ou serti de belles pierres peut atteindre une valeur très supérieure. Il faut donc faire estimer avant de céder au poids.',
        ],
      },
      {
        h: 'Lire les poinçons',
        p: [
          'La tête d’aigle indique l’or 750 pour mille, la Minerve l’argent, la tête de chien le platine. Un poinçon de maître et une signature de maison (Cartier, Boucheron, Mauboussin…) sont des indices de valeur.',
        ],
      },
      {
        h: 'Pierres et sertissage',
        p: [
          'Diamants, saphirs, rubis, émeraudes, perles fines : la taille, la couleur, la pureté et l’origine comptent. Les pierres taillées à l’ancienne (taille ancienne, taille rose) sont souvent appréciées des amateurs.',
        ],
      },
      {
        h: 'Montres et horlogerie',
        p: [
          'Une montre de gousset ou un chronomètre de marque peut conserver une valeur importante, même s’il ne fonctionne plus. Conservez la boîte, les papiers et les accessoires.',
        ],
      },
    ],
    faq: [
      { q: 'Où faire estimer un bijou ancien ?', a: 'Auprès d’un expert qui examine à la fois la valeur du métal, des pierres et l’intérêt de collection. Une estimation gratuite à partir de photos est un bon point de départ.' },
      { q: 'Dois-je faire nettoyer mon bijou ?', a: 'Un nettoyage doux suffit. Évitez les produits chimiques et les polissages qui effacent la patine.' },
    ],
    related: ['reconnaitre-argenterie-massive-poincons', 'photographier-ses-objets-pour-une-estimation'],
    service: 'bijoux-montres',
  },
  {
    slug: 'valeur-porcelaine-ancienne-marques',
    kw: 'valeur porcelaine ancienne marques',
    cluster: 'objets',
    title: 'Porcelaine ancienne : lire les marques et estimer la valeur',
    desc: 'Limoges, Sèvres, Meissen, faïences régionales : lire les marques de porcelaine, repérer les défauts et estimer un service ou un vase ancien.',
    h1: 'Porcelaine ancienne : marques et valeur',
    lead: 'Assiettes de famille, vases de collection, services complets : la porcelaine ancienne se lit au dos. Marques, décors et état déterminent son prix.',
    minutes: 5,
    sections: [
      {
        h: 'Retourner la pièce',
        p: [
          'Le dessous d’une assiette ou d’un vase livre la plupart des informations : marque de manufacture, numéros, signature du décorateur, mention du pays. Photographiez ces détails avant toute estimation.',
        ],
      },
      {
        h: 'Limoges, Sèvres, Meissen : des marques à connaître',
        p: [
          'La porcelaine dure de Limoges est née après la découverte du kaolin à Saint-Yrieix au XVIIIe siècle et a donné naissance à de nombreuses manufactures. Sèvres et Meissen sont des références de la porcelaine européenne. Les faïences régionales (Moustiers, Rochefort, Montpellier) ont leur propre public.',
        ],
      },
      {
        h: 'État, rareté, ensemble',
        p: [
          'Un éclat, un fêle ou une restauration réduisent la valeur. À l’inverse, un service complet, avec ses pièces d’origine, est plus intéressant que des pièces isolées. Les décors peints à la main sont plus recherchés que les décors imprimés.',
        ],
        ul: ['Éviter le lave-vaisselle pour les pièces dorées', 'Emballer chaque pièce séparément', 'Garder les boîtes et les accessoires', 'Ne pas recoller soi-même'],
      },
    ],
    faq: [
      { q: 'La porcelaine de Limoges se vend-elle bien ?', a: 'Les services courants du XXe siècle sont abondants et se vendent à des prix modestes, tandis que les pièces anciennes, rares ou signées trouvent plus facilement preneur.' },
      { q: 'Que faire d’un service complet de table ?', a: 'Faites-le estimer dans son ensemble : un service complet, en bon état, conserve mieux sa valeur.' },
    ],
    related: ['reconnaitre-argenterie-massive-poincons', 'vendre-une-collection-heritee'],
    service: 'porcelaines-arts-de-la-table',
  },
  {
    slug: 'vendre-une-collection-heritee',
    kw: 'vendre une collection héritée',
    cluster: 'vente',
    title: 'Vendre une collection héritée : par où commencer ?',
    desc: 'Vous avez hérité d’une collection (timbres, bibelots, armes, livres, objets d’art) : inventaire, estimation, partage entre héritiers, choix du mode de vente.',
    h1: 'Vendre une collection héritée : par où commencer ?',
    lead: 'Hériter d’une collection, c’est hériter d’une passion qui n’est pas toujours la vôtre. Pour la valoriser sans la disperser au hasard, une méthode simple suffit.',
    minutes: 5,
    sections: [
      {
        h: 'Commencer par un inventaire',
        p: [
          'Listez les pièces, regroupez-les par famille, photographiez-les et conservez les catalogues, factures, certificats et carnets du collectionneur. Ces documents ont parfois autant de valeur que l’objet lui-même.',
        ],
      },
      {
        h: 'Faire estimer la collection dans son ensemble',
        p: [
          'Une collection cohérente vaut souvent plus réunie que dispersée. Un expert évalue l’intérêt d’ensemble, repère les pièces maîtresses et recommande la meilleure stratégie : vente en bloc, vente par lots, enchères spécialisées.',
        ],
      },
      {
        h: 'Partager entre héritiers',
        p: [
          'Si plusieurs héritiers sont concernés, une estimation écrite sert de base de discussion. Elle peut aussi permettre à l’un d’eux de reprendre certaines pièces en compensation.',
        ],
      },
      {
        h: 'Choisir le bon mode de vente',
        p: [
          'Le rachat direct est rapide et sans frais, mais le prix intègre la marge de l’acheteur. Les enchères spécialisées peuvent valoriser certaines pièces rares. Pour un dossier important, comparez deux approches avant de décider.',
        ],
      },
    ],
    faq: [
      { q: 'Rachetez-vous des collections complètes ?', a: 'Oui, après inventaire et estimation. Le rachat peut porter sur l’ensemble ou sur certaines pièces d’intérêt.' },
      { q: 'Dois-je classer ma collection avant l’estimation ?', a: 'Un classement sommaire aide, mais n’est pas indispensable. Ne nettoyez pas les objets.' },
    ],
    related: ['estimer-le-mobilier-d-une-succession', 'ou-vendre-des-meubles-anciens'],
    service: 'vendre-collection-objets-d-art',
  },
  {
    slug: 'photographier-ses-objets-pour-une-estimation',
    kw: 'estimation antiquités par photo',
    cluster: 'estimation',
    title: 'Estimation par photos : bien photographier vos objets',
    desc: 'Comment photographier un meuble, un tableau, un bijou ou un bronze pour obtenir une estimation gratuite en ligne : angles, lumière, détails à montrer.',
    h1: 'Bien photographier ses objets pour une estimation',
    lead: 'De bonnes photos suffisent souvent à obtenir une première estimation précise. Quelques règles simples permettent d’éviter les allers-retours.',
    minutes: 4,
    sections: [
      {
        h: 'Lumière et fond',
        p: [
          'Photographiez de jour, près d’une fenêtre, sans flash. Dégagez l’objet, posez-le sur un fond neutre quand c’est possible. Une photo nette et lumineuse vaut mieux que dix photos floues.',
        ],
      },
      {
        h: 'Les angles à fournir pour un meuble',
        p: [
          'Vue d’ensemble de face, de profil, de dessus, détails des pieds, des poignées, des ferrures, intérieur des tiroirs, dessous et dos, éventuelles estampilles ou étiquettes. Pour un meuble à tiroirs, sortez un tiroir pour montrer l’assemblage.',
        ],
      },
      {
        h: 'Tableaux, bijoux, bronzes, porcelaines',
        p: [
          'Tableau : recto, verso, signature, cadre, étiquettes. Bijou : face, profil, poinçons de près. Bronze : tous les côtés, la base, les cachets. Porcelaine : dessus, dessous, marque.',
        ],
        ul: ['Ajoutez un objet de comparaison (règle, pièce) pour la taille', 'Indiquez les dimensions et l’état connu', 'Précisez l’origine et l’histoire familiale', 'Transmettez toutes les photos en une seule fois'],
      },
      {
        h: 'Envoyer votre demande',
        p: [
          'Utilisez le formulaire d’estimation gratuite : décrivez vos objets, joignez les photographies et laissez vos coordonnées. Un expert vous répond et, si nécessaire, convient d’une visite.',
        ],
      },
    ],
    faq: [
      { q: 'Combien de photos faut-il envoyer ?', a: 'Entre 3 et 8 par objet important : vue d’ensemble, détails, marques et état. Pour un grand nombre d’objets, des vues d’ensemble des pièces suffisent dans un premier temps.' },
      { q: 'Est-ce que l’estimation par photo est fiable ?', a: 'Elle donne une première fourchette. L’examen sur place la confirme ou l’affine.' },
    ],
    related: ['combien-vaut-un-meuble-ancien', 'estimer-un-tableau-ancien', 'vendre-bijoux-anciens-or-poincons'],
    service: 'estimation-antiquites-par-photos',
  },
  {
    slug: 'bronze-ancien-reconnaitre-la-fonte',
    kw: 'valeur bronze ancien',
    cluster: 'objets',
    title: 'Bronze ancien : reconnaître la fonte et estimer sa valeur',
    desc: 'Statuette, animalier, garniture de cheminée : comment reconnaître un bronze ancien, lire la patine, les cachets de fondeur et estimer sa valeur.',
    h1: 'Bronze ancien : reconnaître la fonte et la valeur',
    lead: 'Fonte d’époque, édition posthume ou reproduction moderne : un bronze ne se juge pas à son poids. La finesse, la patine et les marques font la différence.',
    minutes: 5,
    sections: [
      {
        h: 'Fonte d’époque, fonte posthume, reproduction',
        p: [
          'Une fonte d’époque est réalisée du vivant du sculpteur ou peu après. Une édition posthume est tirée après sa mort, parfois en grand nombre. Une reproduction moderne est souvent plus lourde, moins fine, avec une patine uniforme.',
        ],
      },
      {
        h: 'Cachets, signatures et numéros',
        p: [
          'Regardez la base, les côtés et le dessous : signature du sculpteur, cachet du fondeur, numéro d’édition, mention « cire perdue » ou « sable ». Ces éléments orientent l’estimation.',
        ],
      },
      {
        h: 'La patine et la ciselure',
        p: [
          'Une patine d’origine, brune ou verte, subtilement nuancée, a de la valeur. Les surfaces polies, redorées ou recolorées sont à signaler. La ciselure après fonte, qui reprend les détails, distingue les belles pièces.',
        ],
        ul: ['Ne pas nettoyer au métal-poli', 'Ne pas décaper la patine', 'Conserver le socle d’origine', 'Photographier la base et les cachets'],
      },
    ],
    faq: [
      { q: 'Comment savoir si mon bronze est ancien ?', a: 'Un examen de la fonte, de la patine, des cachets et du socle permet de situer l’époque. Les photographies de la base sont essentielles.' },
      { q: 'Les bronzes d’animaliers se vendent-ils ?', a: 'Oui, notamment ceux de bons sculpteurs animaliers. Le prix dépend de la qualité de la fonte et du sujet.' },
    ],
    related: ['vendre-une-collection-heritee', 'photographier-ses-objets-pour-une-estimation'],
    service: 'bronzes-sculptures',
  },
];

export const GUIDE_CLUSTERS: Record<Guide['cluster'], string> = {
  succession: 'Succession et héritage',
  meubles: 'Meubles anciens',
  objets: 'Objets d’art, bijoux, argenterie',
  vente: 'Vendre : où et comment',
  estimation: 'Estimation',
};

export const guide = (slug: string) => GUIDES.find((g) => g.slug === slug)!;
