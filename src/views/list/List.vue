<template>
  <div></div>
</template>

<script setup lang="ts">
import { getList } from '@/api/articleApi.ts'
function loadData() {
  getList()
}
loadData()
</script>

<style scoped></style>
