import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import markdoc from '@astrojs/markdoc'
import react from '@astrojs/react'
import Icons from 'unplugin-icons/vite'
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
  integrations: [tailwind(), sitemap(), markdoc(), react(), keystatic()],
  output: 'hybrid',
})
