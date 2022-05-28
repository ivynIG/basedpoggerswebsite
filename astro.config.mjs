import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap(), solid()]
});