import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'240e:404:1e31:26a:6dfb:9a60:1d02:b644',
    port:3003
  }
})
