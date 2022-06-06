// 这个模块。API进行统一管理接口
import requests from './requests'

import mockRequest from '@/api/MockRequest'

//三级联动接口
// /api/product/getBaseCategoryList get 无参数
//发请求，axios发请求返回promise对象
export const reqCategoryList = () =>
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })

export const reqGetBannerList = () =>
  mockRequest({
    url: '/banner',
    method: 'get'
  })
