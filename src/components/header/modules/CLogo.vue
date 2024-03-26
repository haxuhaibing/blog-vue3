<!--
 * @Date: 2023-06-25 16:36:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-26 23:16:25
 * @FilePath: /blog-xuhaibing.com/src/components/header/components/CLogo.vue
-->
<template>
  <div class="logo">
    <router-link to="/">
      <img src="@/assets/images/logo.png" />
    </router-link>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  img {
    max-height: 34px;
  }
}
</style>
