import { createRouter, createWebHistory } from 'vue-router'
// import sideBarRoutes from './sideBarRoutes'
// import { EfdIcmsIpi, EfdPisCofins, Home, IcmsIpiEntrada, IcmsIpiSaida, PisCofinsEntrada, PisCofinsSaida } from '../components/view'

// function extratRoutes (routes: Array<any>): Array<any> {
//   return routes.flatMap(({ routes }: any): Array<any> => routes)
// }


const lazyLoad = (componentName: string) => import(`../components/view/${componentName}.vue`)


const routes = [
  // ...extratRoutes(sideBarRoutes),
  {
    path: '/',
    name: 'Home',
    component: () => import(`../components/view/Home.vue`),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/efd-icms-ipi',
    name: 'EFD ICMS IPI',
    // meta: {
    //   layout: 'MainLayout'
    // },
    children: [
      {
        path: 'entrada',
        name: 'Entrada',
        component: () => lazyLoad('IcmsIpiEntrada'),
        meta: {
          layout: 'MainLayout'
        }
      },
      {
        path: 'saida',
        name: 'Saida',
        component: () => lazyLoad('IcmsIpiSaida'),
        meta: {
          layout: 'MainLayout'
        }
      }
    ]
  },
  {
    path: '/efd-pis-cofins',
    name: 'EFD PIS COFINS',
    // meta: {
    //   layout: 'MainLayout'
    // },
    children: [
      {
        path: 'entrada',
        name: 'Entrada',
        component: () => lazyLoad('PisCofinsEntrada'),
        meta: {
          layout: 'MainLayout'
        }
      },
      {
        path: 'saida',
        name: 'Saida',
        component: () => lazyLoad('PisCofinsSaida'),
        meta: {
          layout: 'MainLayout'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
