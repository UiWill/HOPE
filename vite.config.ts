import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HOPE/', // Adicione o nome do seu repositório aqui
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
