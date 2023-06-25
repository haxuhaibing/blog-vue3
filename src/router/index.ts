/*
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-25 16:09:06
 * @FilePath: /blog-vue3/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
      meta: {
        isFooter: false,
        keepAlive: false,
        title: '移动审批'
      }
    }
  ]
})

export default router
