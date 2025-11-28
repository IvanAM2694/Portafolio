import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://IvanAM2694.github.io', // Opcional, pero recomendado
  base: '/Portafolio', 
});
