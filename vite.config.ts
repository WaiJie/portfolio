import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
