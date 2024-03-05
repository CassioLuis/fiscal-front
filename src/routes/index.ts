import { createRouter, createWebHistory } from 'vue-router'
import sideBarRoutes from './sideBarRoutes'

function extratRoutes (routes: Array<any>): Array<any> {
  return routes.flatMap(({ routes }: any): Array<any> => routes)
}

const routes = [
  ...extratRoutes(sideBarRoutes)
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

console.log(routes)

export default router
