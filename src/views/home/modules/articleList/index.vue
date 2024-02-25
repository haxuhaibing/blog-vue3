<!--
 * @Date: 2023-06-25 20:27:42
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 12:17:19
 * @FilePath: /blog-xuhaibing.com/src/views/home/modules/articleList/index.vue
-->
<template>
  <a-card :bodyStyle="{ padding: '8px 16px' }">
    <div class="home-article-list">
      <a-skeleton :loading="loading" active  >
        <div class="item" v-for="item of dataList" :key="item.id">
          <div class="item-body">
            <div class="item-content">
              <div class="item-title">
                <RouterLink :to="'/article/' + item.id">
                  <span class="title">{{ item.title }}</span></RouterLink
                >

                <span class="date">{{ item.createTime }}</span>
              </div>
              <div class="item-details" v-html="item.content"></div>
            </div>
          </div>
          <div class="item-footer">
            <div class="item-tag">
              {{ item.createBy || 'admin' }}
            </div>
            <a-tag :bordered="false"> {{ item.type_dictText }}</a-tag>
          </div>
        </div>
      </a-skeleton>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { getList } from '@/api/articleApi'
import { ref, nextTick } from 'vue'
const dataList: any = ref([])
const loading = ref(true)
async function loadData() {
  let listResponse: any = await getList()
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
  .item {
    border-bottom: 1px solid var(--primary-border-color);
    padding: 8px 0;
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
  }
  .item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 16px;
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
