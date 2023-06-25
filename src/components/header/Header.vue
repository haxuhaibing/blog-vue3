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
</script>
<style lang="scss" scoped>
header {
  .container {
    padding: 24px;
    display: flex;
    justify-content: space-between;
  }
  nav{
    flex:1;
    display: flex;
  }
}
</style>
