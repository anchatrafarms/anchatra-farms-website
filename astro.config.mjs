import { defineConfig } from 'astro/config';
import { site } from './src/data/site.js';

export default defineConfig({
  // Set your live address in src/data/site.js (site.url)
  site: site.url || undefined,
  devToolbar: { enabled: false },
});
