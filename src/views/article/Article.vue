<!--
 * @Date: 2023-06-26 18:14:47
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-26 18:47:23
 * @FilePath: /blog-xuhaibing.com/src/views/article/Article.vue
-->
<template>
  <div class="article-detail">
    <div class="container">
      <div class="article-detail-title">
        <h1>{{ detailData.title }}</h1>
      </div>
      <div class="article-detail-content">{{ detailData.contents }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'
import { geQueryById } from '@/api/articleApi'
const route = useRoute()
const detailData: any = ref({})

watchEffect(async () => {
  let id = route.params.id
  loadData(id)
})
function loadData(id) {
  let params = {
    id
  }
  geQueryById(params).then((response: any) => {
    if (response.success) {
      detailData.value = response.result
    }
  })
}
</script>

<style scoped>
.article-detail-title {
  text-align: center;
}
.article-detail-content{
    margin-top:24px;
}
</style>
