import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@errors': path.resolve(__dirname, './src/components/errors'),
      '@util': path.resolve(__dirname, './src/util'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@public': path.resolve(__dirname, './public/'),
    },  
  },
  plugins: [react()],
  base: "/cpuvsim/",
})
