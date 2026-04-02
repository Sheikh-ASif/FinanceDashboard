import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',        // ensures correct paths for assets
  build: {
    outDir: 'dist',  // Vite default, good for static deployment
  },
})