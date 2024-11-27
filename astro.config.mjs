import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import Icons from 'unplugin-icons/vite'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://brfbonneville.se',
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  integrations: [tailwind(), mdx(), sitemap(), icon(), markdoc(), keystatic()],
  output: 'hybrid',
})
