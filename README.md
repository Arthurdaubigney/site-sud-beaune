# Les Antiquités de Benjamin

Site statique (Astro 5) de l'antiquaire et cabinet d'expertise itinérant « Les Antiquités de Benjamin » : toute la Nouvelle-Aquitaine (12 départements) et toute l'Occitanie (13 départements).

Direction artistique « Sud-Ouest Prestige » : ivoire pierre du Périgord, vert pin des Landes, terracotta de Toulouse, laiton ; Playfair Display + Plus Jakarta Sans (`src/styles/global.css`).

```bash
npm install
npm run dev                   # http://localhost:4321
npm run build                 # génère dist/
node scripts/check-seo.mjs    # contrôle title, description, h1 unique, alt/title, JSON-LD
node scripts/check-images.mjs # aucune photo en double sur une page
```

## À personnaliser avant la mise en ligne (`src/data/site.ts`)

- `SITE.name`, `SITE.wordmark` : nom commercial (provisoire).
- `SITE.url`, `astro.config.mjs` (`site`) et `public/robots.txt` : nom de domaine.
- `SITE.tallyId` : identifiant du formulaire Tally (`https://tally.so/r/<ID>`). Le composant
  `src/components/TallyForm.astro` affiche l'iframe dès que l'identifiant est renseigné.
- `SITE.phone`, `SITE.email` : alimentent le pied de page et le JSON-LD une fois renseignés.
- `src/pages/mentions-legales.astro` : éditeur, SIRET, hébergeur.

## Structure

- `src/data/site.ts` : maisons, spécialités, FAQ (contenu éditorial). `src/data/images.ts` : alt/title SEO des visuels.
- `src/lib/schema.ts` : JSON-LD (ProfessionalService/LocalBusiness/Store, Service, FAQPage, BreadcrumbList, WebSite).
- `src/components/` : Header, Footer, Pic, TallyForm, Faq, CtaPhoto, PageHero, Prose, Band.
- `src/pages/` : accueil, `nos-maisons/[slug]`, `antiquites/[slug]`, rachat-succession, expertise-estimation,
  estimation-gratuite, la-maison, mentions légales, plan du site, 404, `sitemap.xml`.
- `public/img/` : images WebP (700/1400 px) libres de droits ; crédits dans `src/data/images.credits.json`
  et affichés en pied de page.
