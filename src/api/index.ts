// 这个模块。API进行统一管理接口
import requests from './requests'

import mockRequest from '@/api/MockRequest'

//三级联动接口
// /api/product/getBaseCategoryList get 无参数
//发请求，axios发请求返回promise对象  这个地方可以有两种写法，一种是函数式的，一种是对象式的
export const reqCategoryList = () =>
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })

// 搜索商品的数据 parms 默认传递一个空对象
export const reqSearchList = (data: any)=>
  requests({
    url: '/list',
    method: 'post',
    data,
  }).then( response=> {
    // console.log(response)
    return response
    }
  ).catch(function (error) {
    console.log(error)
  })


// 轮播图请求 函数式写法
export const reqGetBannerList = () => mockRequest.get('/banner')

//底部轮播图请求
export const reqGetFloorList = () =>
  mockRequest({
    url: '/floor',
    method: 'get'
  })
