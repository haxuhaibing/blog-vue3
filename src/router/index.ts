/*
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-26 16:16:03
 * @FilePath: /blog-xuhaibing.com/src/router/index.ts
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
    },
    {
      path: "/",
      redirect: {
        name: "home",
      },
    },
  ]
})

export default router
