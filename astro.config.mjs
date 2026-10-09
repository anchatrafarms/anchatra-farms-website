
import { defineConfig } from 'astro/config';
import { site } from './src/data/site.js';

export default defineConfig({
  site: 'https://anchatrafarms.github.io',
  // Only GitHub Pages serves the site from a subfolder; locally it lives at /
  base: process.env.GITHUB_PAGES ? '/anchatra-farms-website' : '/',
  devToolbar: { enabled: false },
});
