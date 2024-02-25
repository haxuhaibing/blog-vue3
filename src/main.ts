/*
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 15:39:29
 * @FilePath: /blog-xuhaibing.com/src/main.ts
 */
 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import {currentSite} from "@/config/config";
const app = createApp(App)
import 'ant-design-vue/dist/reset.css';
import "@/styles/common.scss";
import "@/styles/variable.scss";
import CIcon from '@/components/CIcon.vue'
app.component('CIcon', CIcon)
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
