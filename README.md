# Maisons d'Antiquaires du Sud-Ouest

Site statique (Astro 5) d'un réseau d'antiquaires et d'experts en objets d'art : Charente (16/17), Périgord (24),
Gironde (33), Landes/Pays basque (40/64), avec extension Gard (30) et Hérault (34).

```bash
npm install
npm run dev                   # http://localhost:4321
npm run build                 # génère dist/
node scripts/check-seo.mjs    # contrôle title, description, h1 unique, alt/title, JSON-LD
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
