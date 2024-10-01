import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: {
    host: '127.0.0.1',
    // host: '192.168.60.205',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
      },
    },
    https: {
      key: "./localhost+1-key.pem", // 생성된 파일의 이름을 입력해주세요
      cert: "./localhost+1.pem"
    }
  },
})
