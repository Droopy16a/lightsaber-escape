import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // nom du repo GitHub,
  server: {
    host: '192.168.1.19',
    port: 3000,
    allowedHosts: ['a6cc-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app']
  }
})
