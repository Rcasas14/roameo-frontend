import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_TITLE__: JSON.stringify('roameo'),
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0',
    port: 5050,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
