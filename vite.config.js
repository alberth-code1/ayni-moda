import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/ayni-moda/', // base correcto para GitHub Pages
  plugins: [react()],
})
