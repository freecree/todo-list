import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todo-list/',
  resolve: {
    alias: {
      '@variables': '/src/scss/variables.scss',
    },
  },
  plugins: [react()],
});
