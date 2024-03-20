<!--
 * @Date: 2024-03-20 19:55:27
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-20 20:07:47
 * @FilePath: /blog-xuhaibing.com/src/components/markdown/markdown.vue
-->
<template>
   <div v-html="convertedMarkdown"></div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const convertedMarkdown=ref("")
 
</script>