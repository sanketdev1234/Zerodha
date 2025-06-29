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
    port: 3000,
    host: true,
    allowedHosts: [
      's-exchange-frontend.onrender.com',
      's-exchange-dashboard.onrender.com',
      's-exchange-backend.onrender.com',
      '.onrender.com'
    ]
  }
})
