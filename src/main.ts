/*
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-20 23:06:04
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
import '@/styles/tailwind.css'
import CIcon from '@/components/CIcon.vue'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
app.use(VMdPreview);
app.component('CIcon', CIcon)

 
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
