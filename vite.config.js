import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port frontend đang chạy
    proxy: {
      // Chuyển tiếp các request bắt đầu bằng `/api` đến backend
      '/api': {
        target: 'http://localhost:8099', // Backend URL
        changeOrigin: true, // Cần thiết để tránh vấn đề CORS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Loại bỏ prefix '/api' nếu cần
      },
    },
  },
})
