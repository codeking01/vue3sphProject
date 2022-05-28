import homeindex from '@/pages/Home/index.vue'
import loginindex from '@/pages/Login/index.vue'
import searchindex from '@/pages/Search/index.vue'
import registerindex from '@/pages/Register/index.vue'
import { RouteRecordRaw } from 'vue-router'
// 配置路由
const routes: Array<RouteRecordRaw> = [
  // 首页路由
  {
    path: '/home',
    component: homeindex,
    meta: { show: true }
  },
  // 搜索路由
  {
    // 指定参数可传可不传，则在这个参数后面加个?
    path: '/search/:keyword?',
    component: searchindex,
    meta: { show: true },
    name: 'search'
    // 路由组件传递props数据，布尔值写法:params(只能传递这个)
    // props: true
    // 可以使用对象写法
    /*  props: {
       a: 1,
       b: 2
     } */
    // 函数写法，可以传递params，query
    /*  props: ($route) => {
      return {
        keyword: $route.params.keyword,
        k: $route.query.k
      }
    } */
  },
  // 登录路由
  {
    path: '/login',
    component: loginindex,
    meta: { show: false }
  },
  // 注册路由
  {
    path: '/register',
    component: registerindex,
    meta: { show: false }
  },
  // 重定向到首页
  {
    path: '/',
    redirect: '/home'
  }
]
export  default routes
