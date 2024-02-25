<!--
 * @Date: 2024-02-23 15:10:29
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 19:45:41
 * @FilePath: /blog-xuhaibing.com/src/views/home/modules/HomeRecommend.vue
-->
<template>
  <a-card :bodyStyle="{ padding: '16px' }">
    <div class="home-recommend-card">
      <div class="home-recommend-title">
        <div class="name">
          <c-icon icon="icon-top" :style="{ fontSize: '24px' }"></c-icon>文章榜
        </div>
        <div class="more"><c-icon icon="icon-refresh"></c-icon>换一换</div>
      </div>
      <div class="home-recommend-list">
        <section v-for="(item, index) in dataSource" :key="item.id">
          <span>{{ index + 1 }}</span>
          <RouterLink :to="'/article/'+item.id">
            {{ item.title }}
          </RouterLink>
        </section>
      </div>
    </div>
  </a-card>
</template>
<script setup lang="ts">
import { getList } from '@/api/articleApi'
import { ref, nextTick } from 'vue'
import type { IItem } from '@/interface/commonInterface.ts'
const dataSource = ref<IItem[]>([])

const loading = ref(true)
async function loadData() {
  let listResponse: any = await getList()
  if (listResponse.success) {
    dataSource.value = listResponse.result.records || []
  }
  await nextTick()
  loading.value = false
}
loadData()
</script>
<style lang="scss" scoped>
.home-recommend-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--primary-border-color);
  padding-bottom: 10px;

  .name {
    font-size: 16px;
    font-size: 500;
    display: flex;
    align-items: center;
    .icon {
      display: inline-flex;
      margin-right: 8px;
    }
  }
  .more {
    font-size: 14px;
    font-size: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon {
      display: inline-flex;
      margin-right: 8px;
      color: var(--assist-color);
    }
    color: var(--assist-color);
    &:hover {
      color: var(--primary-color);
    }
  }
}

.home-recommend-list {
  section {
    display: flex;
    align-items: center;
    margin: 6px -6px;
    padding: 6px;
    span {
      width: 18px;
      height: 14px;
      text-align: center;
      display: inline-flex;
      line-height: 14px;
      color: var(--assist-color);
      font-weight: 500;
      margin-right: 4px;
    }

    a {
      display: block;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    &:hover {
      background-color: #f7f8fa;
      a {
        color: #333;
      }
    }

    &:nth-child(1) {
      span {
        color: #f64242;
      }
    }
    &:nth-child(2) {
      span {
        color: #f64242;
      }
    }
    &:nth-child(3) {
      span {
        color: #f64242;
      }
    }
  }
}
</style>
