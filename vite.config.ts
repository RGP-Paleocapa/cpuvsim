import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/cpuvsim/components/'),
      '@common': path.resolve(__dirname, './src/cpuvsim/components/common'),
      '@errors': path.resolve(__dirname, './src/cpuvsim/components/errors'),
      '@util': path.resolve(__dirname, './src/cpuvsim/util'),
      '@hooks': path.resolve(__dirname, './src/cpuvsim/hooks'),
      '@locales': path.resolve(__dirname, './src/cpuvsim/locales'),
      '@pages': path.resolve(__dirname, './src/cpuvsim/pages/'),
      '@assets': path.resolve(__dirname, './src/cpuvsim/assets/'),
      '@public': path.resolve(__dirname, './public/'),
    },
  },
  plugins: [react()],
  base: "/cpuvsim/",
})
