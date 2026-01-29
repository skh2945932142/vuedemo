// 1. 必须有这一行导入语句！
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 2. 然后才能使用 defineConfig
export default defineConfig({
  plugins: [vue()],
  server: {
    // 你之前如果加了其它配置（如 host 或 port），可以写在这里
    host: '0.0.0.0' 
  }
})