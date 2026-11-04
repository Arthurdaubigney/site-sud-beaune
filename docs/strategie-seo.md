# Stratégie SEO et conversion – Les Antiquités de Benjamin

## Objectif
Faire du formulaire Tally (estimation gratuite) le point d'arrivée de chaque page, en captant les recherches
qui précèdent une vente : succession, héritage, vente de meubles anciens, estimation d'objets d'art.

## Ce qui est mesuré, et ce qui ne l'est pas
Aucun outil de volume de recherche (Google Keyword Planner, Semrush, Ahrefs, Search Console) n'a été
utilisé : **les volumes ne sont pas chiffrés ici**. Les niveaux de priorité ci-dessous reposent sur
l'intention de recherche, la structure des résultats (annuaires et antiquaires locaux qui parlent de
« rachat immédiat », « estimation gratuite », « inventaire de succession », « débarras ») et la logique
de conversion. À valider avec Google Search Console (après 4 à 8 semaines) et Keyword Planner.

## Grappes de mots-clés (par ordre de potentiel de conversion)

| Priorité | Intention | Requêtes cibles | Page |
|---|---|---|---|
| 1 | Transactionnelle, très forte | rachat succession antiquités, antiquaire rachat à domicile, estimation gratuite antiquités | `/rachat-succession/`, `/rachat-antiquites-a-domicile/`, `/estimation-gratuite/` |
| 1 | Transactionnelle locale | antiquaire + ville (Bordeaux, Toulouse, Montpellier, Biarritz, Bayonne, Pau, Périgueux, La Rochelle, Angoulême, Limoges, Poitiers, Nîmes, Perpignan, Albi, Cognac, Arcachon) | `/antiquaire-<ville>/` |
| 1 | Transactionnelle locale | antiquaire + département | `/zones-intervention/<departement>/` |
| 2 | Vente | vendre meubles anciens, vendre collection, vendre bijoux/argenterie/tableau | `/vendre-meubles-anciens/`, `/vendre-collection-objets-d-art/`, pages spécialités |
| 2 | Succession (héritiers) | débarras maison succession, inventaire succession, estimation mobilier notaire | `/debarras-maison-succession/`, `/inventaire-succession-estimation/`, `/notaires-heritiers-estimation-mobilier/` |
| 3 | Informationnelle à fort potentiel | que faire des meubles après un décès, estimer le mobilier d'une succession, combien vaut un meuble ancien, où vendre des meubles anciens | `/conseils/…` |
| 3 | Informationnelle (autorité) | reconnaître un meuble d'époque, poinçons argent/or, valeur porcelaine, estimer un tableau, valeur bronze | `/conseils/…` |

## Parcours de conversion
1. Chaque page se termine par le formulaire Tally (section verte, éléments de rassurance : discrétion,
   paiement direct, déplacement gratuit).
2. Chaque guide contient un bloc d'appel à l'action après la deuxième section, un bandeau avant la FAQ et le
   formulaire en bas de page ; sur mobile, un bouton « Estimation gratuite » reste fixe en bas d'écran.
3. Les guides renvoient vers la page service ou spécialité correspondante (maillage vers les pages qui convertissent).

## Données structurées
`ProfessionalService/LocalBusiness/Store` (organisation et zones), `Service`, `FAQPage` (toutes les pages à FAQ),
`Article` (guides), `BreadcrumbList`, `WebSite`.

## Suivi à mettre en place
- Search Console : soumettre `https://www.antiquites-de-benjamin.fr/sitemap.xml`, suivre requêtes/pages.
- Mesurer les soumissions Tally (page d'origine) : ajouter un champ caché ou un événement d'analytics.
- Compléter la fiche Google Business Profile (zone de service, catégories « Antiquaire », « Expert en objets d'art »).
- Collecter de vrais avis clients (aucun avis n'est affiché tant qu'il n'est pas réel).

## Prochaines pages à écrire (à prioriser avec les données Search Console)
Villes supplémentaires (Bayonne/Dax/Mont-de-Marsan, Brive, Agen, Cahors, Niort, Saintes, Bergerac, Béziers, Carcassonne, Narbonne…),
guides par objet (pendule ancienne, armoire, buffet, tapis, livres anciens, armes anciennes), et études de cas réelles.

## Contrôles automatiques
```bash
npm run build
node scripts/check-seo.mjs     # title 45–62 car., description 135–160 car., h1 unique, alt/title, JSON-LD
node scripts/check-images.mjs  # aucune photo en double sur une page
node scripts/check-links.mjs   # aucun lien interne cassé, pages orphelines
```

---

# Axe « objets » : capter du trafic qualifié par type d'objet

## Principe
Jusqu'ici, le site captait surtout des recherches **géographiques** (« antiquaire + ville / département »). Le travail
« objets » ajoute une deuxième entrée : les gens qui cherchent **ce qu'ils possèdent** (« rachat manteau de fourrure »,
« vendre pièces en or », « estimation vase Gallé »). Ces recherches ont une intention de vente très nette, une
concurrence locale souvent faible (peu d'antiquaires ont une page dédiée par objet) et recoupent les successions.

Aucun outil de volume (Keyword Planner, Semrush, Ahrefs, Search Console) n'est disponible dans cet environnement :
**les niveaux ci-dessous sont des hypothèses d'intention et de concurrence, pas des volumes mesurés**.

## Grille d'analyse (à valider avec Search Console puis Keyword Planner)

| Objet / page | Intention | Potentiel (hypothèse) | Pourquoi |
|---|---|---|---|
| Pièces en or (Napoléon, Louis d'or) | Vendre vite, valeur connue | Très fort | Très recherché, motivation financière immédiate, objets fréquents en succession |
| Pièces de monnaie anciennes | Estimer une collection | Fort | Collections héritées, peu de contenu local de qualité |
| Bijoux anciens en or | Vendre / estimer | Très fort | Volume large, mais concurrence des comptoirs d'or : se différencier par l'expertise (valeur de travail) |
| Montres de collection (Rolex, gousset) | Vendre / estimer | Très fort | Valeur unitaire élevée, recherches de marque très qualifiées |
| Manteaux de fourrure | Vendre un objet dormant | Fort | Objet fréquent dans les successions, peu de pages dédiées locales |
| Malles / sacs de luxe | Vendre / authentifier | Fort | Marques recherchées, forte valeur, concurrence de plateformes |
| Verrerie d'art (Gallé, Daum, Lalique) | Estimer une pièce signée | Moyen-fort | Requêtes très spécifiques, acheteurs avertis, peu de contenu local |
| Livres anciens, cartes postales, timbres | Estimer / vendre une collection | Moyen | Volumes moyens, trafic de collectionneurs et d'héritiers |
| Médailles et décorations | Estimer un souvenir de famille | Moyen | Niche, fort aspect successoral |
| Pendules, instruments de marine | Estimer une pièce | Moyen | Pièces typiques du Sud-Ouest (ports, maisons d'armateurs) |
| Art asiatique | Estimer un vase / une pièce | Moyen-fort | Marché international très demandeur ; attention aux copies |
| Design vintage, luminaires, miroirs | Vendre du mobilier du XXe | Moyen | Marché de décorateurs |
| Haute couture / vintage, jouets anciens | Vendre un fonds de famille | Moyen | Niche mais qualifiée |

## Ce qui a été mis en place
- Hub `/objets/` et **17 pages objet** `/objets/rachat-<objet>/` : un H1 par requête cible, contenu unique (objets concernés,
  critères de valeur, erreurs à éviter, démarche d'estimation), FAQ avec données structurées, CTA et formulaire Tally.
- Maillage : chaque page objet renvoie vers 3 objets voisins, les villes principales, la page « rachat à domicile » ; le hub
  est relié depuis l'accueil, la navigation, le pied de page, le plan du site et le sitemap.
- Prudence juridique : fourrures (espèces protégées / CITES), ivoire, décorations, pièces d'or (origine / notaire).
  Aucun prix chiffré : la valeur dépend de chaque pièce.

## À faire ensuite (avec des données réelles)
1. Après 4 à 8 semaines, regarder dans Search Console les requêtes qui apportent des impressions, et **prioriser/étoffer**
   les pages objet qui performent (ajouter exemples, photos réelles d'objets rachetés, cas concrets).
2. Croiser avec Keyword Planner pour chiffrer les volumes et ajouter les objets manquants (vinyles, armes anciennes
   dans le respect de la loi, tapis, sculptures africaines, art populaire, affiches…).
3. Ajouter des **vraies photos d'objets rachetés** (avec autorisation) : c'est le plus fort levier de confiance et de
   différenciation face aux annuaires.
4. Pages croisées « objet + ville » (ex. rachat pièces de monnaie Bordeaux) **uniquement** pour les objets qui performent,
   avec un contenu réellement local pour éviter le contenu dupliqué.

## Photos
Chaque page a une photo d'en-tête unique sur tout le site (hors accueil) : registre `src/lib/imageMap.ts`, contrôle `node scripts/check-heroes.mjs`. Réserve : ~100 photos libres de droits, crédits en pied de page.
