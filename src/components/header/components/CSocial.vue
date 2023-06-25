<!--
 * @Date: 2023-06-25 16:36:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-25 17:04:05
 * @FilePath: /blog-vue3/src/components/header/components/CSocial.vue
-->
<template>
  <div class="header-social">
    <div class="item" v-for="item of socialList" :key="item.icon">
      <i class="iconfont" :class="item.icon"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const socialList = ref([
  { icon: 'icon-weibo', url: '' },
  { icon: 'icon-weixin', url: '' }
])
</script>

<style scoped lang="scss">
.header-social {
  display: flex;
  .item{
    margin-left: 24px;
  }
  .iconfont{
    font-size:22px;
    cursor: pointer;
  }
}
</style>
