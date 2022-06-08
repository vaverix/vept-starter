import { defineConfig } from 'vite'
import path from 'path'
import glob from 'glob'

// a small hack to make vite load all html files in the src directory
// this is needed because vite doesn't support dynamic imports
const htmlFiles = glob.sync('./src/**/*.html')
let input = {}
htmlFiles.forEach((file) => {
  const name = path.basename(file, '.html')
  input[name] = file
})

export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input,
    },
  },
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
})
