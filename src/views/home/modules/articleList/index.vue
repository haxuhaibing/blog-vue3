<!--
 * @Date: 2023-06-25 20:27:42
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-25 22:18:27
 * @FilePath: /blog-vue3/src/views/home/modules/articleList/index.vue
-->
<template>
  <div class="home-article-list">
    <div class="item" v-for="item of dataList" :key="item.id">
      <div class="item-content">
        <div class="item-title">
          <span class="title">{{ item.title }}</span>
          <span class="date">{{ item.createTime }}</span>
        </div>
        <div class="item-details">
          {{ item.contents }}
        </div>
      </div>
      <div class="item-thumb" v-if="item.thumb">
        <img :src="item.thumb" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/articleApi'
import { ref } from 'vue'
const dataList: any = ref([])
async function loadData() {
  let listResponse: any = await getList()  
  if (listResponse.success) {
    dataList.value = listResponse.result.records || []
  }
}
loadData()
</script>

<style scoped lang="scss">
.home-article-list {
  .item {
    border-bottom: 1px solid var(--primary-border-color);
    padding: 16px 0;
    display: flex;
    align-items: center;
  }

  .item-thumb {
    border-radius: 4px;
    height: 120px;
    width: 240px;
    margin-left: 16px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .item-content {
    flex: 1;
    overflow: hidden;
  }
  .item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .item-details {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
}
</style>
