<!--
 * @Date: 2023-06-26 18:14:47
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-20 22:34:51
 * @FilePath: /blog-xuhaibing.com/src/views/article/Article.vue
-->
<template>
  <div class="article-detail mt24">
    <div class="container">
      <a-skeleton active :loading="isLoading" :paragraph="{ rows: 8 }" >
        <div class="article-detail-body">
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
          <div class="article-detail-content">
            <v-md-preview :text="detailData.contents"></v-md-preview>
          </div>
          <div class="article-detail-commit">
            <ArticleCommentList></ArticleCommentList>
          </div>
        </div>
      </a-skeleton>
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
const isLoading=ref(true)

function loadData(id: string) {
  let params = {
    id
  }
  geQueryById(params).then((response: any) => {
    if (response.success) {
      detailData.value = response.result
    }
  }).finally(()=>{
    isLoading.value=false
  })
}

watchEffect(async () => {
  let id = route.params.id as string
  loadData(id)
})
</script>

<style lang="scss">
.article-detail-author {
  margin: 16px 0;
  span {
    color: var(--assist-color);
  }
}
.article-detail-content {
  margin-top: 24px;
  line-height: 1.6;
}
.article-detail-content {
  .github-markdown-body {
    padding: 0;
  }
}
</style>
