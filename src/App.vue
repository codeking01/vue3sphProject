<template>
  <div>
    <!--  下面这两个是非路由组件-->
    <!-- 头部组件 -->
    <HeaderIndex/>
    <!-- 路由出口 -->
    <router-view/>
    <!--底部组件-->
<!--    <p v-show="true">{{ (router.currentRoute.value.fullPath) }}</p>-->
    <div v-show="getFlag()">
      <FooterIndex/>
    </div>
  </div>

</template>
<script setup lang="ts">
import HeaderIndex from '@/components/Header/header-index.vue'
import FooterIndex from '@/components/Footer/footer-index.vue'
import router from '@/router'
// const props = props[]

// interface Idata {
//   keyword?: string
// }
//
// // 使用defineProps接受参数
// defineProps({
//   data: {
//     type: Object as PropType<Idata>,
//     required: false
//   }
// })
function getFlag () {
  return (router.currentRoute.value.fullPath === '/home' || router.currentRoute.value.fullPath === '/search')
}
</script>
<style>
</style>
