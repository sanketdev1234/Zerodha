import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    host: true,
    allowedHosts: [
      's-exchange-frontend.onrender.com',
      's-exchange-dashboard.onrender.com',
      's-exchange-backend.onrender.com',
      '.onrender.com'
    ]
  }
})
