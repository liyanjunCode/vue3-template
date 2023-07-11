import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const path = (name) => resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {

  },
  resolve:{
    alias: {
      '@': path('src'),
      '@store': path('src/store'),
      '@router': path('src/router'),
      '@pages': path('src/pages')
    },
    extensions: ['.vue', '.js', '.jsx', '.json', '.scss', '.css']
  },
  plugins: [vue()],
})
