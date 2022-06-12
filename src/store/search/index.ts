//search模块的小仓库
import { reqSearchList } from '@/api'

const state = {
  searchList:{}
}
const mutations = {
  GETSEARCHLIST(state:any,searchList:any){
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({commit}:any,searchParams:any){
    let result:any = await reqSearchList(searchParams)
    // console.log(result)
    if(result.code === 200) {
      // 将result.data 传递给仓库 state.searchList
      commit('GETSEARCHLIST', result.data);
    }
    //  先让请求传递过去 后期接口好了再删除这个
    // commit('GETSEARCHLIST', result.data);
  }
}
// 用这个会简便获取数据
const getters = {
  // vue 3.2 中这个不好用 并且也没有用的必要
  //计算新的属性:state,当前小仓库的数据
  // goodList(state:any){
  //   return state.searchList.goodList
  // }
}

export default {
  // 是否开启 命名空间  开启以后可以按照模块使用
  // namespace:true, // 开启命名空间
  state,
  mutations,
  actions,
  getters
}
