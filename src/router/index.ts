/*
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-25 21:12:38
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
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ '../views/article/Article.vue'),
      meta: {
        isFooter: false,
        keepAlive: false,
        title: '移动审批'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
      meta: {
        isFooter: false,
        keepAlive: false,
        title: '移动审批'
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '../views/demo/Demo.vue'),
      meta: {
        isFooter: false,
        keepAlive: false,
        title: 'demo'
      }
    }
  ]
})

export default router
