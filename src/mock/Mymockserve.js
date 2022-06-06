import Mock from 'mockjs'
// 先导入 数据  json 数据默认暴露
import banner from './banner.json'
import floor from './floor.json'

// 发请求  第一个参数写请求的地址，第二个写请求的数据
Mock.mock('/mock/banner', {
  code: 200,
  data: banner
})
Mock.mock('/mock/floor', {
  code: 200,
  data: floor
})
