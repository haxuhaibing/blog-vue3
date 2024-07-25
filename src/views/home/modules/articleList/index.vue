<!--
 * @Date: 2023-06-25 20:27:42
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 22:17:05
 * @FilePath: /blog-xuhaibing.com/src/views/home/modules/articleList/index.vue
-->
<template>
  <div>
    <a-input-search
      v-model:value="form.keyword"
      placeholder="请输入产品名称"
      size="large"
      style="width: 100%"
      enter-button
      @search="onSearch"
    />
  </div>

  <div class="home-article-list container">
    <a-skeleton :loading="loading" active>
      <div class="item" v-for="item of dataList" :key="item.id">
        <router-link :to="'/product/'+item.id">
          <div class="item-thumb">
            <img :src="item.thumbString" alt="" />
          </div>
          <div class="item-title">
            <span>{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </a-skeleton>
  </div>
  <div>
    <a-pagination v-model:current="paginationParams.current" :total="paginationParams.total" />
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/articleApi'
import { ref, nextTick } from 'vue'
const dataList: any = ref([])
const loading = ref(true)

//seach
const form = ref({
  keyword: ''
})

const paginationParams = ref({
  current: 1,
  total: 500
})

function onSearch() {
  loadData()
}
async function loadData() {
  let params = {
    title: '*' + form.value.keyword + '*'
  }
  let listResponse: any = await getList(params)
  if (listResponse.success) {
    dataList.value = listResponse.result.records || []
  }
  await nextTick()
  loading.value = false
}
loadData()
</script>

<style scoped lang="scss">
.home-article-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -8px;
  .item {
    // border-bottom: 1px solid var(--primary-border-color);
    width: calc(25% - 16px);
    padding: 8px 0;
    margin: 8px;
    &:last-child {
      border-bottom: none;
    }
  }
  .item-body {
    display: flex;
    align-items: center;
  }

  .item-thumb {
    border-radius: 4px;
    height: 280px;
    border: 1px solid #f1f1f1;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    height: 50px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .date {
      color: var(--assist-color);
    }
  }
  .item-details {
    margin-top: 8px;
    color: var(--assist-color);
    overflow: hidden;
    height: 46px;
  }
  .item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
  .item-tag {
    color: var(--assist-color);
  }
}
</style>
