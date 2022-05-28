<template>
  <div>
    <!--    我是首页-->
    <!-- 三级联动全局组件引入到这个使用-->
    <type-nav/>
    <!--    引入其余组件-->
    <ListContainer/>
    <Todayrecommend/>
    <Rankindex/>
    <Likeindex/>
    <Floorindex/>
    <Brandindex/>
  </div>
</template>

<script setup lang="ts">
import ListContainer from './ListContainer/index.vue'
import Todayrecommend from './Recommend/index.vue'
import Rankindex from './Rank/index.vue'
import Likeindex from './Like/index.vue'
import Floorindex from './Floor/index.vue'
import Brandindex from './Brand/index.vue'

/* export default {
  name: 'home-index',
  components: {}
}*/
</script>

<style scoped>

</style>
