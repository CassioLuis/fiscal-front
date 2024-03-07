import { createRouter, createWebHistory } from 'vue-router'
import spedRoutes from './spedRoutes'


const lazyLoad = (componentName: string) => import(`../components/view/${componentName}.vue`)

// function extratRoutes (routes: Array<any>): Array<any> {
//   return routes.flatMap(({ routes }: any): Array<any> => routes)
// }

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
    ...spedRoutes
  ]
})

export default router
