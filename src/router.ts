import { createRouter, createWebHistory } from 'vue-router'
// import sideBarRoutes from './sideBarRoutes'
// import { EfdIcmsIpi, EfdPisCofins, Home, IcmsIpiEntrada, IcmsIpiSaida, PisCofinsEntrada, PisCofinsSaida } from '../components/view'

// function extratRoutes (routes: Array<any>): Array<any> {
//   return routes.flatMap(({ routes }: any): Array<any> => routes)
// }


const lazyLoad = (componentName: string) => import(`./components/view/${componentName}.vue`)

// COM CHILDREN
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/efd-icms-ipi',
      name: 'EFD ICMS IPI',
      children: [
        {
          path: 'entrada',
          name: 'entradaIcms',
          component: () => lazyLoad('IcmsIpiEntrada'),
          meta: {
            name: 'Entrada'
          }
        },
        {
          path: 'saida',
          name: 'saidaIcms',
          component: () => lazyLoad('IcmsIpiSaida'),
          meta: {
            name: 'Saida'
          }
        }
      ]
    },
    {
      path: '/efd-pis-cofins',
      name: 'EFD PIS COFINS',
      children: [
        {
          path: 'entrada',
          name: 'entradaPis',
          component: () => lazyLoad('PisCofinsEntrada'),
          meta: {
            name: 'Entrada'
          }
        },
        {
          path: 'saida',
          name: 'saidaPis',
          component: () => lazyLoad('PisCofinsSaida'),
          meta: {
            name: 'Saida'
          }
        }
      ]
    }
  ]
})



// SEM CHILDREN
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/efd-icms-ipi/entrada',
//       name: 'EFD ICMS IPI / ENTRADA',
//       component: () => lazyLoad('IcmsIpiEntrada')
//     },
//     {
//       path: '/efd-icms-ipi/saida',
//       name: 'EFD ICMS IPI / SAIDA',
//       component: () => lazyLoad('IcmsIpiSaida')
//     },
//     {
//       path: '/efd-pis-cofins/entrada',
//       name: 'EFD PIS COFINS / ENTRADA',
//       component: () => lazyLoad('PisCofinsEntrada'),
//     },
//     {
//       path: '/efd-pis-cofins/saida',
//       name: 'EFD PIS COFINS / SAIDA',
//       component: () => lazyLoad('PisCofinsSaida'),
//     }
//   ]
// })

export default router
