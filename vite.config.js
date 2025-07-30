import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cadastro-usuarios/', // ← coloque o nome EXATO do repositório no GitHub
  plugins: [react()],
})
