import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Импортируем модуль path для работы с путями

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Используйте vue() вместо plugin()
  server: {
    host: '0.0.0.0',
    port: 50475,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Настройка алиаса @ для пути src/
    },
  },
});
