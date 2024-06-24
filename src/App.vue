<!--
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-13 23:57:25
 * @FilePath: /blog-xuhaibing.com/src/App.vue
-->

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#d2af61'
      }
    }"
  >
    <CHeader></CHeader>
    <RouterView />
    <!-- <CFooter></CFooter> -->
  </a-config-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CHeader from './components/header/Header.vue'
import CFooter from './components/footer/CFooter.vue'
</script>
<style scoped></style>
