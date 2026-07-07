import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const site =
  process.env.PUBLIC_SITE_URL ??
  (process.env.ASTRO_ENV === 'prod'
    ? 'https://ivamlabs.com'
    : 'https://IvanAM2694.github.io');

const base =
  process.env.PUBLIC_BASE_PATH ??
  (process.env.ASTRO_ENV === 'prod' ? '/' : '/Portafolio');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
});
