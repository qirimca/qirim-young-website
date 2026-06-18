import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Performance optimizations for PageSpeed
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          if (id.includes('react-i18next') || id.includes('i18next') || id.includes('i18next-browser-languagedetector')) {
            return 'i18n';
          }
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          if (id.includes('framer-motion')) {
            return 'motion';
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: true
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'react-router-dom', 'react-i18next', 'framer-motion']
  },
  server: {
    open: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  preview: {
    port: 3000
  }
});