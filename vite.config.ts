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
      'https://raw.githubusercontent.com/Angstromico/Vue-Quiz/main/quiz.png',
    determiner: 'auto',
    description: 'Clima Ideal Page',
    locale: 'es',
    localeAlternate: ['en', 'es'],
    siteName: 'Clima Ideal',
  },
  twitter: {
    image:
      'https://raw.githubusercontent.com/Angstromico/Vue-Quiz/main/quiz.png',
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
