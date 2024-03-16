<!--
 * @Date: 2024-02-25 21:07:01
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-16 20:11:03
 * @FilePath: /blog-xuhaibing.com/src/views/demo/Demo.vue
-->
<template>
  <p>父组件:{{ user }} </p>
  <TInput v-model:title="user"></TInput>
</template>
<script setup lang="js">
import { watch, ref } from 'vue';
import TInput from "@/components/test/TInput.vue"
const user=ref()
</script>
<style lang="scss">
.body {
  display: flex;
  align-items: center;
  justify-content: stretch;
}
</style>
