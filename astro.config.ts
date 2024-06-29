import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
// import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  site: "https://bibliaonline.es",
  // trailingSlash: "never",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    // db(),
  ],
  adapter: netlify(),
  output: "hybrid",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
