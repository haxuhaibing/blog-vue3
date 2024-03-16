<!--
 * @Date: 2024-03-16 00:38:15
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-16 21:43:42
 * @FilePath: /blog-xuhaibing.com/src/components/test/TInput.vue
-->
<template>
  <input type="text" v-model="title" />
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const title = defineModel('title')
const route=useRoute()
let {params,query}=route
console.log({route,params,query})
</script>
