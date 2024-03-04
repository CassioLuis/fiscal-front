import { createRouter, createWebHistory } from 'vue-router'
import sideBarRoutes from './sideBarRoutes' 


const routes = [
  ...sideBarRoutes,
  {
    path: '/',
    name: 'HelloWorld',
    // component: HelloWorld,
    meta: {
      layout: 'MainLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
