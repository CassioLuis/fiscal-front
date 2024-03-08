import { createRouter, createWebHistory } from 'vue-router'
import { fiscalRoutes, contabilRoutes } from './modules'


const lazyLoad = (componentName: string) => import(`../components/view/${componentName}.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => lazyLoad('Home'),
      meta: {
        layout: 'MainLayout'
      }
    },
    ...fiscalRoutes,
    ...contabilRoutes
  ]
})

export default router
