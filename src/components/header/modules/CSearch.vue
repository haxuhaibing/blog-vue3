<!--
 * @Date: 2023-06-25 16:36:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-26 22:09:24
 * @FilePath: /blog-xuhaibing.com/src/components/header/modules/CSearch.vue
-->
<template>
  <div class="header-search">
    <c-icon icon="icon-search" :style="{ fontSize: '22px',fontWeight:300 }"/>
    <span>请输入关键字...</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
 .header-search{
    background-color: rgb(233 237 240);
    height: 36px;
    width: 200px;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;

    span{
        opacity: 0.7;
        margin-left: 4px;
        font-size: 13px;
    }
 }
</style>
