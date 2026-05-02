import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dennyscarrillo.com',
  integrations: [
    vue(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/blog/razzmatazz-barcelona': '/blog/bio-dennys',
    '/en/blog/razzmatazz-barcelona': '/en/blog/bio-dennys'
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
    optimizeDeps: {
      include: ['lenis']
    }
  },
});
