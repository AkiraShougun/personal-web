import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import markdownItKatex from 'markdown-it-katex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // <-- allows Vue to compile Markdown files
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(markdownItKatex)
      }
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
