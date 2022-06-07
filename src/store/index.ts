import { createStore } from 'vuex'
import home from '@/store/home'
import search from '@/store/search'
//存放数据的地方
/* const state = {
  count:12
}; */

// 修改state的唯一手段
/* const mutations = {
  add1(state:any,data:any){
    state.count +=data;
  },
  ADD(state:any,data:any){
    state.count +=data;
  }
} */
// 书写自己的业务逻辑 可以处理异步
/* const actions = {
  add({commit}:any,data:any){
    setTimeout(()=>{
      commit("ADD",data)
    },1000);
  }
} */
// 计算属性 让组件获取仓库的数据更加方便
/*
const getters = {
  changeCount(state:any){
    console.log('缓存')
    return state.count+5
  }
}
*/


const store :any= createStore({
    //实现vuex参考模块式开发
   modules:{
    home,
    search
  }
})
export default store
