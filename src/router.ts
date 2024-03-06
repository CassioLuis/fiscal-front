import { createRouter, createWebHistory } from 'vue-router'
// import sideBarRoutes from './sideBarRoutes'
// import { EfdIcmsIpi, EfdPisCofins, Home, IcmsIpiEntrada, IcmsIpiSaida, PisCofinsEntrada, PisCofinsSaida } from '../components/view'

// function extratRoutes (routes: Array<any>): Array<any> {
//   return routes.flatMap(({ routes }: any): Array<any> => routes)
// }


const lazyLoad = (componentName: string) => import(`./components/view/${componentName}.vue`)

// COM CHILDREN
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/efd-icms-ipi',
//       name: 'EFD ICMS IPI',
//       children: [
//         {
//           path: 'entrada',
//           name: 'Entrada',
//           component: () => lazyLoad('IcmsIpiEntrada'),
//         },
//         {
//           path: 'saida',
//           name: 'Saida',
//           component: () => lazyLoad('IcmsIpiSaida'),
//         }
//       ]
//     },
//     {
//       path: '/efd-pis-cofins',
//       name: 'EFD PIS COFINS',
//       children: [
//         {
//           path: 'entrada',
//           name: 'Entrada',
//           component: () => lazyLoad('PisCofinsEntrada'),
//         },
//         {
//           path: 'saida',
//           name: 'Saida',
//           component: () => lazyLoad('PisCofinsSaida'),
//         }
//       ]
//     },
//     {
//       path: '/efd-pis-cofins2',
//       name: 'EFD PIS COFINS',
//       children: [
//         {
//           path: 'entrada',
//           name: 'Entrada',
//           component: () => lazyLoad('PisCofinsEntrada'),
//         },
//         {
//           path: 'saida',
//           name: 'Saida',
//           component: () => lazyLoad('PisCofinsSaida'),
//         }
//       ]
//     }
//   ]
// })



// SEM CHILDREN
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/efd-icms-ipi',
      name: 'EFD ICMS IPI',
      component: () => lazyLoad('IcmsIpiEntrada')
    },
    {
      path: '/efd-pis-cofins',
      name: 'EFD PIS COFINS',
      component: () => lazyLoad('PisCofinsSaida'),
    },
    {
      path: '/efd-pis-cofins2',
      name: 'EFD PIS COFINS',
      component: () => lazyLoad('PisCofinsEntrada'),
    },
    {
      path: '/efd-pis-cofins3',
      name: 'EFD PIS COFINS',
      component: () => lazyLoad('PisCofinsEntrada'),
    }
  ]
})

export default router
