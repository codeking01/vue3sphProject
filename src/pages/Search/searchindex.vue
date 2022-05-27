<template>
  <div>
    我是搜索
  </div>
  <h1>路由参数{{ $route.path }}</h1>
<!--  <h1>params参数&#45;&#45;{{ keyword }}</h1>
  <h1>query参数&#45;&#45;{{ query }}</h1>-->
  <h1>params参数--{{ $route.params.keyword }}</h1>
  <h1>query参数--{{ $route.query.k }}</h1>
</template>

<script setup lang="ts">
/* import { defineProps } from 'vue'
defineProps({
  keyword: String || Number,
  query: String || Number
}) */

</script>

<style scoped>

</style>
