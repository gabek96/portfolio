// Vite configuration for portfolio site
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/portfolio/' : '/',
  server: {
    port: parseInt(process.env.PORT) || 5173,
  },
}))
