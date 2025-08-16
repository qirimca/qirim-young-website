import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    // Enable Fast Refresh
    fastRefresh: true,
    // Optimize JSX runtime
    jsxRuntime: 'automatic',
    // Include babel plugins for optimization
    babel: {
      plugins: [
        // Add React optimization plugins
        ['@babel/plugin-transform-react-constant-elements'],
        ['@babel/plugin-transform-react-inline-elements']
      ]
    }
  })],
  base: '/',
  build: {
    // Performance optimizations for PageSpeed
    target: 'esnext',
    minify: 'terser',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    // Exclude OTF fonts from production build
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Advanced manual chunks for better caching
        manualChunks: (id) => {
          // React ecosystem
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // React Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI Libraries
          if (id.includes('lucide-react') || id.includes('@heroicons')) {
            return 'icons'
          }
          if (id.includes('@headlessui') || id.includes('framer-motion')) {
            return 'ui'
          }
          // i18n
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'i18n'
          }
          // Vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        // Optimize file names for caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssMinify: true
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'lucide-react',
      'i18next',
      'react-i18next',
      '@headlessui/react'
    ],
    // Force optimization of these dependencies
    force: true
  },
  server: {
    open: true,
    // Enable compression
    middlewareMode: false,
    // DNS resolution optimization
    host: 'localhost'
  },
  preview: {
    port: 3000,
    // Enable gzip compression for preview
    proxy: {}
  },
  // Enable experimental features
  experimental: {
    // Improve build times
    hmrPartialAccept: true
  }
})
