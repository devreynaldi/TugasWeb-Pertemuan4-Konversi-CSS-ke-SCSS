import { defineConfig } from 'vite';

export default defineConfig({
  base: '/TugasWeb-Pertemuan4-Konversi-CSS-ke-SCSS/',
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
});