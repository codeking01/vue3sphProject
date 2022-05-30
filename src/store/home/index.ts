//home模块的小仓库
import { reqCategoryList } from '@/api'

const state = {
  //默认的初始数据 要对应（这个是根据接口返回的数据类型对应）
  categoryList:[]
}
const mutations = {
  CATEGORYLIST (state: any, categoryList: any) {
    //删除第17个元素。 value的第一个参数是从哪个位置开始，第二个是代表删除几个
    categoryList.splice(16,1)
    state.categoryList = categoryList
  }
}
const actions = {
  async CategoryList ({ commit }: any) {
    let result: any = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
