import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import ogPlugin from 'vite-plugin-open-graph'
import type { Options } from 'vite-plugin-open-graph'

const ogOptions: Options = {
  basic: {
    url: '/',
    title: 'Clima Ideal',
    type: 'image.png',
    image:
      'https://crisp.chat/static/blog/content/images/2022/05/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg',
    determiner: 'auto',
    description: 'Clima Ideal Page',
    locale: 'es',
    localeAlternate: ['en', 'es'],
    siteName: 'Clima Ideal',
  },
  twitter: {
    image:
      'https://crisp.chat/static/blog/content/images/2022/05/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg',
    imageAlt: 'twitter image alt',
  },
  facebook: {
    appId: 16416846,
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools(), ogPlugin(ogOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
