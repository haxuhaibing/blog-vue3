<!--
 * @Date: 2023-06-25 16:42:20
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-26 18:49:01
 * @FilePath: /blog-xuhaibing.com/src/components/header/components/CNav.vue
-->
<template>
  <nav class="header-nav">
    <div class="item" v-for="item of navList" :key="item.name">
      <RouterLink :to="item.url">
        <span> {{ item.name }}</span></RouterLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navList = ref([
  {
    name: '首页',
    url: '/home'
  },
  {
    name: '分类',
    url: '/classify'
  },
  {
    name: '关于我',
    url: '/about'
  }
])
</script>

<style scoped lang="scss">
.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    margin: 0 24px;
    font-size: 16px;
    cursor: pointer;

    span {
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
  .active,
  .item:hover {
    span {
      box-shadow: 0 0 #0000, 0 0 #0000, inset 0 2px 4px #0000000d;
      background: var(--primary-hover-color);
    }
  }
}
</style>
