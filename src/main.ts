import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav/index.vue'
import store from '@/store'
/* //测试接口引入
import { reqCategoryList } from '@/api/'
reqCategoryList(); */

const app = createApp(App)
app.component('TypeNav', TypeNav)
app.use(router)
app.use(store)
app.mount('#app')
