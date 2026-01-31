import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // [新增] 引入路由配置
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia()) // 使用 Pinia 状态管理
app.use(router) // 使用路由
app.use(ElementPlus) // 使用 Element Plus
app.mount('#app')