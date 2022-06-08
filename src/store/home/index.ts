//home模块的小仓库
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'

const state:any = {
  //默认的初始数据 要对应（这个是根据接口返回的数据类型对应）
  categoryList:[],
  //轮播图数据
  bannerList:[],
  //底部数据
  floorList:[],
}
const mutations :any = {
  CATEGORYLIST (state: any, categoryList: any) {
    //删除第17个元素。 value的第一个参数是从哪个位置开始，第二个是代表删除几个
    categoryList.splice(16,1)
    state.categoryList = categoryList
  },
  BANNERLIST(state:any, bannerList:any){
    state.bannerList = bannerList
  },
  FLOORLIST(state:any, floorList:any){
    state.floorList =floorList
  }
}
const actions :any = {
  async CategoryList ({ commit }: any) {
    //reqCategoryList() 调用的是事先写好的接口
    let result: any = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }: any){
    let result: any = await reqGetBannerList()
    // console.log(result.data)
    if(result.code === 200) {
      commit('BANNERLIST', result.data)
    }
  },
  async getFloorList({commit}:any){
    let result: any = await reqGetFloorList()
    if(result.code === 200) {
      commit('FLOORLIST', result.data)
    }
  }
}
const getters :any= {

}

export default {
  state,
  mutations,
  actions,
  getters
}
