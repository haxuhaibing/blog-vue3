<!--
 * @Date: 2024-02-22 20:14:03
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-26 00:01:26
 * @FilePath: /blog-xuhaibing.com/src/views/article/modules/ArticleCommentList.vue
-->
<template>
  <a-comment>
    <template #avatar>
      <a-avatar :src="getImageUrl('default.jpg')" alt="Han Solo" />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="form.comment" :rows="4" placeholder="说点什么吧" />
      </a-form-item>
      <a-form-item>
        <a-button :loading="loadingComment" html-type="submit" type="primary" @click="handleSubmit">
          提交评论
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
  <a-list
    v-if="dataSource.length"
    :data-source="dataSource"
    :header="`评论数量：${dataSource.length}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.createBy || '网友'"
          :avatar="getImageUrl('default.jpg')"
          :content="item.comment"
          :datetime="item.createTime"
        />
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRoute } from 'vue-router'
import { get, post } from '@/utils/http'
import { message } from 'ant-design-vue'
import { add, list } from './comment.api'
dayjs.extend(relativeTime)
defineOptions({
  name: 'ArticleCommentAdd'
})
const route: any = useRoute()
import { getImageUrl } from '@/utils/util'
type Comment = Record<string, string>
const loadingComment = ref(false)
const form: any = ref({ comment: '' })
const dataSource = ref<Comment[]>([])
async function loadData() {
  const data = { articleId: route.params.id}
  let response = list(data)
  response.then((response: any) => {
    dataSource.value = response.result.records
  })
}
const handleSubmit = async () => {
  loadingComment.value = true
  const data = { articleId: route.params.id, ...form.value }
  let response: Promise<any> = add(data)
  response.then((response) => {
    form.value = {}
    message.success(response.message)
  })
  response.finally(() => {
    loadingComment.value = false
    loadData()
  })
}

onMounted(() => {
  loadData()
})
</script>
