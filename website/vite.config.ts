import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/health':          { target: 'http://localhost:8787', changeOrigin: true },
      '/products':        { target: 'http://localhost:8787', changeOrigin: true },
      '/review-statuses': { target: 'http://localhost:8787', changeOrigin: true },
      '/dossiers':        { target: 'http://localhost:8787', changeOrigin: true },
      '/window':          { target: 'http://localhost:8787', changeOrigin: true },
    },
  },
})
