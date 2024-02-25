<!--
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-22 19:53:06
 * @FilePath: /blog-xuhaibing.com/src/App.vue
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CHeader from './components/header/Header.vue';
import CFooter from './components/footer/CFooter.vue';
</script>

<template>
  <CHeader></CHeader>
  <RouterView />
  <CFooter></CFooter>
</template>

<style scoped>

</style>
