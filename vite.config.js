import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative Pfade: Der Build läuft so auf GitHub Pages (/portfolio-page/)
  // genauso wie auf jedem anderen Host oder Unterordner.
  base: './',
})
