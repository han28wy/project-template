import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    // { path: '/', redirect: '/login' },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/login/login.vue'),
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/home.vue'),
    },
  ]

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  })
  
  export default router