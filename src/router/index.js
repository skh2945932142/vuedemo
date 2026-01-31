import { createRouter, createWebHistory } from 'vue-router'

// 1. 引入组件
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const routes = [
  { path: '/', component: Home },      //  显示主页
  { path: '/login', component: Login } // 显示登录页
]


// 
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => { 
  // 登录页面
  if(to.path === '/login'){
    next()}
    //检查登录状态
  else{const isAuthenticated = localStorage.getItem('token');
    if(isAuthenticated){
      next();
    }else{
      next('/login');
    }
  }
})


export default router