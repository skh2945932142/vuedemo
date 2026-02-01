import { createRouter, createWebHistory } from 'vue-router'

// 1. 引入组件
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// --- 路由配置 ---
const routes = [
  { path: '/', component: Home },      //  显示主页
  { path: '/login', component: Login } // 显示登录页
]

// 创建实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

//
router.beforeEach((to, from, next) => { 
  // 如果去的是登录页，直接放行
  if(to.path === '/login'){
    next()
  }
  // 否则检查是否有 token
  else {
    const isAuthenticated = localStorage.getItem('token');
    if(isAuthenticated){
      next(); // 
    } else {
      next('/login'); // 无，返回登录页
    }
  }
})

export default router