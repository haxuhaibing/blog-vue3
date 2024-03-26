<!--
 * @Date: 2024-02-22 20:20:09
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-25 17:36:14
 * @FilePath: /blog-xuhaibing.com/src/views/article/modules/ArticleCommentBox.vue
-->
<template>
  <a-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>
  <a-comment>
    <template #avatar>
      <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="value" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          提交评论
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);



type Comment = Record<string, string>;

const comments = ref<Comment[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>('');
const handleSubmit = () => {
 const form={

 }
};
</script>

