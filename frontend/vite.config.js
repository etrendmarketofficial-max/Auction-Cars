import { defineConfig } from 'vite'
‎import react from '@vitejs/plugin-react'
‎
‎export default defineConfig({
‎  base: './', // so GitHub Pages works
‎  plugins: [react()],
‎  build: { outDir: 'dist' }
‎})
‎