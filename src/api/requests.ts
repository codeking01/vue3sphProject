//使用axios进行二次封装
import axios from 'axios'

// 引入进度条 ts不能直接引入nprogress，需要做更改  js文件可以直接 import nprogress from 'nprogress'
import nprogress from './mynprogress.js'
// start 进度条开始 done 结束
// console.log(nprogress)

//1.利用axios请求的方法create,去创建一个实例
//2.request就是axios，只不过稍微配置一下
const requests = axios.create({
  //配置对象
  //基础路径，发请求的时候，路径会出现api
  baseURL: '/api',
  // 配置请求超时时间，5s
  timeout: 5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start();
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
  //进度条结束
  nprogress.done();
  return res.data
},(error)=>{
  return Promise.reject(new Error('failed'))
})

//对外暴露
export default requests
