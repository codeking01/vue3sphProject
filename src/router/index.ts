import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

const router: any = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
