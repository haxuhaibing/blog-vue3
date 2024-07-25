<!--
 * @Date: 2023-06-26 18:14:47
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 21:56:48
 * @FilePath: /blog-xuhaibing.com/src/views/product/product.vue
-->
<template>
  <div class="article-detail mt24">
    <div class="container">
      <div class="product-intro">
        <div class="product-intro-thumb">
          <div class="product-thumb">
            <!-- <img :src="detailData.thumbs[sukIndex]" alt="" /> -->

            <video :src="detailData.thumbs[sukIndex]" controls></video>
          </div>
          <div class="product-silder">
            <CSwiper :dataSource="detailData.thumbs"></CSwiper>
          </div>
        </div>

        <div class="product-intro-content">
          <div class="product-intro-title">{{ detailData.title }}</div>
          <div class="product-intro-tags">
            <a-tag color="default" v-for="tag in detailData.tags">{{ tag }}</a-tag>
          </div>
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

      <div class="article-content">
        <h2 class="article-title">商品描述</h2>
        <div v-html="detailData.contents"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { geQueryById, queryBProductSkuByMainId } from '@/api/articleApi'
import ProductCarousel from './modules/ProductCarousel.vue'
import CSwiper from '@/components/swiper/CSwiper.vue'
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
      let result = response.result || {}
      let tag = result.tag || ''
      result.tags = tag.split('，') || []
      let thumb = result.thumbString || ''
      result.thumbs = thumb.split(',') || []

      if (result.videoString) {
        result.thumbs.unshift(result.videoString)
      }
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
        let size = item.size || ''
         size = size.replace('点', '.')
        item.size = size.split(',').sort((a: any, b: any) => {
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

  video {
    width: 500px;
    height: 500px;
    display: block;
  }
}

.product-intro {
  display: flex;
}

.product-intro-title {
  font-size: 24px;
  color: #000;
  font-weight: 700;
}
.product-intro-tags {
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
.article-title {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    left: -12px;
    top:50%;
    height: 16px;
    width: 4px;
    background-color: red;
    margin-top: -8px;
  }
}
.article-content {
  margin-top: 24px;
}
</style>
