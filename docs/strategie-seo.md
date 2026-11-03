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
