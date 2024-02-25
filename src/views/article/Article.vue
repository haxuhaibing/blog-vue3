<!--
 * @Date: 2023-06-26 18:14:47
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 20:01:32
 * @FilePath: /blog-xuhaibing.com/src/views/article/Article.vue
-->
<template>
  <div class="article-detail mt24">
    <div class="container">
      <div class="article-detail-body">
        <a-card>
          <div class="article-detail-title">
            <h1>{{ detailData.title }}</h1>
          </div>
          <div class="article-detail-author">
            <a-space :size="16">
              <span>{{ detailData.updateBy }}</span>
              <span>{{ detailData.updateTime }}</span>
              <span>{{ detailData.type }}</span>
            </a-space>
          </div>
          <div class="article-detail-content" v-html="detailData.content"></div>
        </a-card>

        <ArticleCommentList></ArticleCommentList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'
import { geQueryById } from '@/api/articleApi'
import ArticleCommentList from './modules/ArticleCommentList.vue'
const route = useRoute()
const detailData: any = ref({})

function loadData(id: string) {
  let params = {
    id
  }
  geQueryById(params).then((response: any) => {
    if (response.success) {
      detailData.value = response.result
    }
  })
}

watchEffect(async () => {
  let id = route.params.id as string
  loadData(id)
})
</script>

<style scoped>
 .article-detail-author{
  margin: 16px 0;
  span{
    color: var(--assist-color);
  }
 }
.article-detail-content {
  margin-top: 24px;
  line-height: 1.6;
}
</style>
