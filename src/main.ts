import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav/index.vue'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/* //测试接口引入
import { reqCategoryList } from '@/api/'
reqCategoryList(); */
import animated from '@/plugins/jsPlugins/animated'
// 引入MockServe.js mock数据
import '@/mock/Mymockserve.js'

const app = createApp(App)
app.component('TypeNav', TypeNav)
app.use(router)
app.use(store)
app.use(animated)
app.use(ElementPlus)
// 加入全局变量中

app.mount('#app')
