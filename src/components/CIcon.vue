<!--
 * @Date: 2024-02-23 15:20:39
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 19:21:57
 * @FilePath: /blog-xuhaibing.com/src/components/CIcon.vue
-->
<template>
  <svg class="icon" aria-hidden="true" :style="props.style">
    <use :xlink:href="'#'+props.icon"></use>
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
    default:''
  },
  style:{
    type:Object,
    required: false,
    default:()=>{}
  }
})
</script>
