import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/carbon-atlas/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})