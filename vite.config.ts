import { resolve } from 'path'
// vite.config.js
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
      input: resolve(__dirname, 'index.html'), // Single entry point
    },
  },
})