<!--
 * @Date: 2023-06-25 16:17:03
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-20 22:01:28
 * @FilePath: /blog-xuhaibing.com/src/components/header/Header.vue
-->
<template>
  <header>
    <div class="container">
      <c-logo />
      <c-nav />
      <c-social />
    </div>
  </header>
</template>
<script setup lang="ts">
import CLogo from './components/CLogo.vue'
import CNav from './components/CNav.vue'
import CSocial from './components/CSocial.vue'
</script>
<style lang="scss" scoped>
header {
  background-color: rgb(var(--ui-background) / 0.75);
  .container {
    padding: 16px 36px;
    display: flex;
    justify-content: space-between;
  }
  nav {
    flex: 1;
    display: flex;
  }
}
</style>
