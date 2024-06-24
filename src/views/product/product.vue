<!--
 * @Date: 2023-06-26 18:14:47
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 16:51:22
 * @FilePath: /blog-xuhaibing.com/src/views/product/product.vue
-->
<template>
  <div class="article-detail mt24">
    <div class="container">
      <div class="product-intro">
        <div class="product-intro-thumb">
          <div class="product-thumb">
            <img :src="detailData.thumb" alt="" />
          </div>
          <div class="product-silder">
            <!-- <ProductCarousel></ProductCarousel> -->
          </div>
        </div>

        <div class="product-intro-content">
          <div class="product-intro-title">{{ detailData.title }}</div>
          <div class="product-intro-tags"> <a-tag color="default" v-for="tag in detailData.tags">{{  tag}}</a-tag></div>
          <div class="product-intro-sku">
            <div class="item">
              <div class="item-label">颜色:</div>
              <div class="item-content">
                <span style="margin-right: 16px" v-for="(item, index) in subDetailData">
                  <a-button type="primary" v-if="sukIndex == index">{{ item.skuName }}</a-button>
                  <a-button v-else>{{ item.skuName }}</a-button>
                </span>
              </div>
            </div>
            <div class="item">
              <div class="item-label">尺寸:</div>
              <div class="item-content">
                <span
                  style="margin-right: 16px"
                  v-for="(item, index) in subDetailData[sukIndex].size"
                >
                  <a-button type="primary" v-if="sukIndex == index">{{ item }}ct</a-button>
                  <a-button v-else>{{ item }}ct</a-button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'
import { geQueryById, queryBProductSkuByMainId } from '@/api/articleApi'
import ProductCarousel from './modules/ProductCarousel.vue'
const route = useRoute()
const detailData: any = ref({})
const subDetailData: any = ref([])
const isLoading = ref(true)
const sukIndex = ref(0)

function getDetail(id: string) {
  let params = {
    id
  }
  return geQueryById(params).then((response: any) => {
    if (response.success) {

      let result = response.result || {};
      result.tags= result.tag.split('，')
      detailData.value = result
    }
  })
}

function getSubDetail(id: string) {
  let params = {
    id
  }
  return queryBProductSkuByMainId(params).then((response: any) => {
    if (response.success) {
      let result = response.result || []
      result.map((item: any) => {
        item.size=item.size.replace('点','.')
        item.size = item.size.split(',').sort((a: any, b: any) => {
          return a - b
        })
      })

      subDetailData.value = result
    }
  })
}

async function loadData(id: string) {
  let detailResponse = await getDetail(id)
  let subDetailResponse = await getSubDetail(id)
  isLoading.value = false
}

watchEffect(async () => {
  let id = route.params.id as string
  loadData(id)
})
</script>

<style lang="scss">
.product-thumb {
  width: 500px;
  height: 500px;
  margin-right: 24px;
}

.product-intro {
  display: flex;
}

.product-intro-title {
  font-size: 24px;
  color: #000;
  font-weight: 700;
}
.product-intro-tags{
  margin-top: 16px;
}
.product-intro-sku {
  .item {
    display: flex;
    align-items: center;
    margin-top: 16px;
    .item-label {
      margin-right: 16px;
    }
  }
}
</style>
