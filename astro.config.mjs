
import { defineConfig } from 'astro/config';
import { site } from './src/data/site.js';

export default defineConfig({
  site: 'https://anchatrafarms.github.io',
  base: '/anchatra-farms-website',
  devToolbar: { enabled: false },
});
