import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
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
