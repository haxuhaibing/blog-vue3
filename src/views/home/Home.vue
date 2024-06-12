<!--
 * @Date: 2023-06-25 16:08:38
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-26 23:52:28
 * @FilePath: /blog-xuhaibing.com/src/views/home/Home.vue
-->
<template>
  <div class="home-container container">
    <a-row :gutter="24">
      <a-col class="gutter-row" :span="16">
        <ArticleList class="mt24"></ArticleList>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <HomeRecommend class="mt24"></HomeRecommend>
      </a-col>
      
    </a-row>
   
  </div>
</template>

<script setup lang="ts">
import ArticleList from './modules/articleList/index.vue'
import HomeRecommend from './modules/HomeRecommend.vue'
</script>

<style lang="scss" scoped>
.home-container{
 background-color: var(--bg-color);
 min-height:calc(100vh - 68px - 81px) ;
}

</style>
