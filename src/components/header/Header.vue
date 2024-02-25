<!--
 * @Date: 2023-06-25 16:17:03
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-25 20:29:59
 * @FilePath: /blog-xuhaibing.com/src/components/header/Header.vue
-->
<template>
  <header>
    <div class="container">
      <CLogo></CLogo>
      <CNav></CNav>
      <CSocial></CSocial>
    </div>
  </header>
</template>
<script setup lang="ts">
import CLogo from './components/CLogo.vue'
import CNav from "./components/CNav.vue"
import CSocial from "./components/CSocial.vue"

console.log(import.meta.env)
</script>
<style lang="scss" scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 8px #f2f3f5;
  .container {
    padding: 16px 36px;
    display: flex;
    justify-content: space-between;
  }
  nav{
    flex:1;
    display: flex;
  }
}
</style>
