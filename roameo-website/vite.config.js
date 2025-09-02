import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimize } from 'vite-plugin-imagemin'

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
      ViteImageOptimize({
        // Only optimize during production builds
        disable: !isProduction,

        // Target large JPG/PNG files, skip small icons/SVGs
        include: /\.(jpe?g|png)$/i,
        exclude: /\.(svg|ico)$/i,

        // Only process images larger than 50KB (skip small UI elements)
        filter: (file) => {
          const sizeInKB = file.size / 1024
          // Skip small files (likely icons/avatars)
          if (sizeInKB < 50) return false

          // Skip files with "icon", "avatar", "logo" in filename
          const filename = file.name.toLowerCase()
          const skipKeywords = ['icon', 'avatar', 'logo', 'btn', 'ui']
          return !skipKeywords.some(keyword => filename.includes(keyword))
        },

        // JPEG optimization for travel photos
        mozjpeg: {
          quality: 85,
          progressive: true,
          smooth: 10
        },

        // PNG optimization
        pngquant: {
          quality: [0.65, 0.8],
          speed: 4,
          strip: true
        },

        // WebP conversion
        webp: {
          quality: 85,
          method: 6,
          autoFilter: true,
          sharpness: 2,
          smartSubsample: true
        },

        // Cache results for faster builds
        cache: true,
        verbose: true
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