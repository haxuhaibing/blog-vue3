<!--
 * @Date: 2023-06-25 16:08:38
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-25 21:21:07
 * @FilePath: /blog-vue3/src/views/home/Home.vue
-->
<template>
  <div class="home-container container">
    <a-row :gutter="24">
      <a-col class="gutter-row" :span="18">
        <ArticleList></ArticleList>
      </a-col>
      <a-col class="gutter-row" :span="6">
       7897
      </a-col>
      
    </a-row>
   
  </div>
</template>

<script setup lang="ts">
import ArticleList from './modules/articleList/index.vue'
</script>

<style scoped></style>
