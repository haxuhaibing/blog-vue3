<!--
 * @Date: 2023-06-25 16:17:03
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-26 22:07:15
 * @FilePath: /blog-xuhaibing.com/src/components/header/Header.vue
-->
<template>
  <header>
    <div class="header-container">
      <div class="container">
        <c-logo />
        <c-nav />
        <c-search /> 
        <c-social />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import CLogo from './modules/CLogo.vue'
import CNav from './modules/CNav.vue'
import CSocial from './modules/CSocial.vue'
import CSearch from './modules/CSearch.vue'
</script>
<style lang="scss" scoped>
header {
  height: 66px;
 
  .container {
    padding: 16px 36px;
    display: flex;
    align-items: center;
  }
}

.header-container{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  background-color: rgb(var(--ui-background) / 0.85);
  z-index: 999;
  backdrop-filter:8px;
}
</style>
