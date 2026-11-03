import { defineConfig } from 'astro/config';

// Remplacer `site` par le nom de domaine définitif avant la mise en ligne.
export default defineConfig({
  site: 'https://www.antiquites-de-benjamin.fr',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
