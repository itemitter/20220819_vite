import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      KeepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/page/login.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      KeepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/page/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router