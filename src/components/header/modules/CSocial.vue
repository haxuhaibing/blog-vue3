<!--
 * @Date: 2023-06-25 16:36:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-26 17:22:16
 * @FilePath: /blog-xuhaibing.com/src/components/header/modules/CSocial.vue
-->
<template>
  <div class="header-social">
    <div class="item" v-for="item of socialList" :key="item.icon">
      <a :href="item.url" target="_blank"
        ><c-icon :icon="item.icon" :style="{ fontSize: '22px' }"
      /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const socialList = ref([
  { icon: 'icon-sun', url: '#' },
  { icon: 'icon-github', url: 'https://github.com/haxuhaibing' }
])
</script>

<style scoped lang="scss">
.header-social {
  display: flex;
  .item {
    margin-left: 24px;
  }
  .iconfont {
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
