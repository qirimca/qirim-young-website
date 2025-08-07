import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qirim-young-website/',
  build: {
    // Performance optimizations for PageSpeed
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
          'ui': ['@headlessui/react']
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
    include: ['react', 'react-dom', 'lucide-react']
  },
  server: {
    open: true
  },
  preview: {
    port: 3000
  }
})
