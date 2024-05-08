import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import markdownItKatex from 'markdown-it-katex'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
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
=======
  plugins: [vue()],
  base: '/personal-web',
>>>>>>> 773b7519198351f82fefb88275d2d58a32fb839b
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
