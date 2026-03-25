import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/items': 'http://localhost:8080',
      '/api': 'http://localhost:8080',
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
