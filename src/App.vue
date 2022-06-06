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
import { onMounted } from 'vue'
import { useStore } from 'vuex'

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

// 挂载的时候
onMounted(()=>{
  //实例化一个store对象
  const store = useStore()
  //发请求，将数据存储到仓库中  这个放在根组件中，这个请求只发一次 优化的
  store.dispatch('CategoryList')
})
</script>
<style>
</style>
