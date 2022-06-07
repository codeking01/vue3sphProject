<template>
  <div>
<!--    <button @click="add1">点我加1</button>-->
<!--    <button @click="add">action+1</button>-->
<!--    <span>仓库数据{{ count }}</span>-->
<!--    <br>-->
<!--    <span>{{ getters.changeCount }}</span>-->
<!--    <span>.....{{ store.getters.changeCount }}</span>-->
    <!--    <button @click="reducenum">点我减1</button>-->
    <!--    我是首页-->

    <!-- 三级联动全局组件引入到这个使用-->
    <TypeNav/>
    <!--    引入其余组件-->
    <!-- 可以用 :is去动态引入组件   -->
<!--    <ListContainer/>-->
    <component :is="ListContainer"/>
    <!--    <Todayrecommend/>-->
    <component :is="TodayRecommend"/>
    <!--    <Rankindex/>-->
    <component :is="RankIndex"/>
    <!--    <Likeindex/>-->
    <component :is="LikeIndex"/>
    <!--    <Floorindex/>-->
    <component :is="FloorIndex" v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"/>
    <!--    <Brandindex/>-->
    <component :is="BrandIndex"/>
  </div>
</template>

<script setup lang="ts">
import ListContainer from './ListContainer/index.vue'
import TodayRecommend from './Recommend/index.vue'
import RankIndex from './Rank/index.vue'
import LikeIndex from './Like/index.vue'
import FloorIndex from './Floor/index.vue'
import BrandIndex from './Brand/index.vue'
//实例化一个store对象
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
const store = useStore()
const floorList = computed(() => store.state.home.floorList)
// 装载的时候获取请求数据到仓库
onMounted(() => {
  //发请求，将数据存储到仓库中  这个放在根组件中，这个请求只发一次 优化的
  store.dispatch('getFloorList')
})

//实例化一个store
// const store = useStore()
// // 接受参数 方法一 mapState在这是一个函数 得改东西
// const count = computed(() => {
//   return store.state.count
// })
// const getters = computed(() => {
//     return store.getters
//   }
// )
// function add1 () {
//   store.commit('add1', 10)
// }
// function add () {
//   store.dispatch('add', 20)
  /* const age = computed(() => {
  return mapState(['count'])
})

const age = computed({
  get () {
    return store.getters.changeCount
  },
  set(){}
}) */

  /* let Person = ref({
    name: 1,
    age: 18
  })
  computed:{
    () => {
      return { ...Person }
    }
  } */

  /* const add = () => {
    count += 1
  }
  const reducenum = () => {
    count -= 1
  }
  可以接受多个 mapState */
// const count = ref(1)

  /* export default {
    name: 'home-index',
    components: {}
  }*/

</script>

<style scoped>

</style>
