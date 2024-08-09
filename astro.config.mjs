import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.verdi.rocks',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [
    starlight({
      title: 'Verdi',
      social: {
        github: 'https://github.com/verdiwm/verdi',
        discord: 'https://discord.gg/SQgWaHPCFg',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
