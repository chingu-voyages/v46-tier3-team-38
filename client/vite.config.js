import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/** Note to everyone 
  I added below code because vite has giving an error "process.env not defined"   
  define: {
    'process.env': {}
} */

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  }
})
