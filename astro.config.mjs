import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://bibliaonline.es',
  // trailingSlash: "never",
  integrations: [react(), tailwind(), sitemap()],
  adapter: netlify(),
  output: "static",
  // prefetch: {
  //   prefetchAll: true,
  //   defaultStrategy: "viewport"
  // },
});
