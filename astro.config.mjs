import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import Icons from "unplugin-icons/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon(),
    Icons(),
    react(),
    markdoc(),
    keystatic(),
  ],
  output: "hybrid",
});
