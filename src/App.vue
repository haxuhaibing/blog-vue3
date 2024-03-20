<!--
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-20 20:49:11
 * @FilePath: /blog-xuhaibing.com/src/App.vue
-->

<template>
  <CHeader></CHeader>
  <RouterView />
  <CFooter></CFooter>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CHeader from './components/header/Header.vue'
import CFooter from './components/footer/CFooter.vue'
</script>
<style scoped></style>
