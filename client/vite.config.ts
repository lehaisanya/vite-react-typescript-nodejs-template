import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const proxy =
    mode === 'development'
      ? {
          '/api': 'http://localhost:3000',
        }
      : null

  return {
    plugins: [react()],
    build: {
      outDir: '../build/static',
    },
    server: {
      proxy,
    },
  }
})
