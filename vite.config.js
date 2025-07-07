import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lightsaber-escape/', // nom du repo GitHub,
  server: {
    host: '192.168.1.19',
    port: 3000
  }
})
