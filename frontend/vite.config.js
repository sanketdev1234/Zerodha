import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy API requests to your backend
      '/api': {
        target: 'https://s-exchange-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        // Optionally rewrite the path if your backend doesn't use /api
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: true,
    cors: {
      origin: [
        'https://s-exchange-backend.onrender.com',
        'http://localhost:8080'
      ],
      credentials: true
    },
    allowedHosts: [
      's-exchange-frontend.onrender.com',
      's-exchange-dashboard.onrender.com',
      's-exchange-backend.onrender.com',
      '.onrender.com',
      
    ]
  }
})
