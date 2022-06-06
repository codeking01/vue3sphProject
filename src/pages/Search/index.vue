<template>
  <div>
    <!--    search模块-->
    <TypeNav/>
    <Footerindex/>
  </div>

  <!--  <h1>路由参数{{ $route.path }}</h1>
    &lt;!&ndash;  <h1>params参数&#45;&#45;{{ keyword }}</h1>
      <h1>query参数&#45;&#45;{{ query }}</h1>&ndash;&gt;
    <h1>params参数&#45;&#45;{{ $route.params.keyword }}</h1>
    <h1>query参数&#45;&#45;{{ $route.query.k }}</h1>-->
</template>

<script setup lang="ts">
/* import { defineProps } from 'vue'
defineProps({
  keyword: String || Number,
  query: String || Number
}) */

import Footerindex from '@/components/Footer/footer-index.vue'
</script>

<style scoped>

</style>
