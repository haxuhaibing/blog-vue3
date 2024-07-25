<!--
 * @Date: 2024-06-24 19:56:02
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 20:53:22
 * @FilePath: /blog-xuhaibing.com/src/components/swiper/CSwiper.vue
-->
<template>
  <div class="c-swiper">
    <swiper
      :slides-per-view="7"
      :space-between="0"
      navigation
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in dataSource">
        <img :src="item" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = [Navigation, Pagination, Scrollbar, A11y]
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const props = defineProps({
  dataSource: Array
})
</script>

<style lang="scss">
.c-swiper {
  width: 500px;
  height: 60px; 

  .swiper-slide {
    img {
      width: 60px;
      height: 60px;
      display: block;
    }
  }

  .swiper-button-lock{
    display: block;
  }
  .swiper-button-prev{
    width: 16px;
    height: 60px;
    background-color: rgb(247, 247, 247);
    left:0px;
    top:0px;
    margin-top: 0;
    display: flex;
    align-items: center;

  }
  .swiper-button-prev:after{
    color: red;
    font-size: 16px;
  }
  .swiper-button-next{
    width: 16px;
    height: 60px;
    background-color: rgb(247, 247, 247);
    right:0px;
    top:0px;
    margin-top: 0;
    display: flex;
    align-items: center;

  }
  .swiper-button-next:after{
    color: red;
    font-size: 16px;
  }
}
.product-silder{
    margin-top: 16px;
}
</style>
