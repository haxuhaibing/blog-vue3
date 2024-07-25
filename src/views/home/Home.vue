<!--
 * @Date: 2023-06-25 16:08:38
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 21:22:55
 * @FilePath: /blog-xuhaibing.com/src/views/home/Home.vue
-->
<template>
  <div class="home-container container">
    <a-row :gutter="24">
      <a-col class="gutter-row" :span="24">
        <ArticleList class="mt24"></ArticleList>
      </a-col>
      
      
    </a-row>
   
  </div>
</template>

<script setup lang="ts">
import { onUnmounted ,onMounted} from 'vue';
import ArticleList from './modules/articleList/index.vue'
import HomeRecommend from './modules/HomeRecommend.vue'

onMounted(() => {
  document.body.classList.add('html-gray')
})

onUnmounted(() => {
  document.body.classList.remove('html-gray')
})
</script>

<style lang="scss" scoped>
.home-container{
 background-color: var(--bg-color);
 min-height:calc(100vh - 68px - 81px);
}
</style>
