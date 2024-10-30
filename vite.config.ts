import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),

  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nationalGoverment: resolve(__dirname, '/national-goverment/index.html'),
        // contact: resolve(__dirname, 'public/contact.html'),
        // Add more pages as needed
      },
    },
  },
})
