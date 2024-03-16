<!--
 * @Date: 2024-03-16 00:38:15
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-16 14:53:27
 * @FilePath: /blog-xuhaibing.com/src/components/test/TInput.vue
-->
<template>
  <input type="text" v-model="inputValue" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ''
  },
  name: {
    type: String,
    required: true,
    default: ''
  }
})

let emits = defineEmits(['update:modelValue'])
const inputValue = ref()

watch(
  () => inputValue.value,
  (val) => {
    emits('update:modelValue', val)
    console.log('update:modelValue',val)
  }
)

watch(
  () => props.modelValue,
  (val) => {

    console.log({props})
    inputValue.value = val
  },
  {
    immediate: true
  }
)

console.log(props)
</script>
