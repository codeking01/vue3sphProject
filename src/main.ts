import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/pages/Home/TypeNav/index.vue'

const app = createApp(App)
app.component('TypeNav', TypeNav)
app.use(router)
app.mount('#app')
