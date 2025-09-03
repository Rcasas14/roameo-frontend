import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    define: {
      __APP_TITLE__: JSON.stringify('roameo'),
    },
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      viteImagemin({
        // Only optimize during production builds
        disable: !isProduction,

        // JPEG optimization for travel photos
        mozjpeg: {
          quality: 85,
          progressive: true
        },

        // PNG optimization
        pngquant: {
          quality: [0.65, 0.8],
          speed: 4
        },

        // WebP conversion
        webp: {
          quality: 85
        }
      })
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
  }
})