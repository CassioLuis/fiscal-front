import {
  IcmsIpiEntrada,
  IcmsIpiSaida,
  PisCofinsEntrada,
  PisCofinsSaida
} from '../components/view'

export default [
  {
    path: '/efd-icms-ipi',
    name: 'EFD ICMS IPI',
    meta: {
      groupOpen: false
    },
    children: [
      {
        path: 'entrada',
        component: IcmsIpiEntrada,
        meta: {
          layout: 'MainLayout',
          name: 'Entrada'
        }
      },
      {
        path: 'saida',
        component: IcmsIpiSaida,
        meta: {
          layout: 'MainLayout',
          name: 'Saida'
        }
      }
    ]
  },
  {
    path: '/efd-pis-cofins',
    name: 'EFD PIS COFINS',
    meta: {
      groupOpen: false
    },
    children: [
      {
        path: 'entrada',
        component: PisCofinsEntrada,
        meta: {
          layout: 'MainLayout',
          name: 'Entrada'
        }
      },
      {
        path: 'saida',
        component: PisCofinsSaida,
        meta: {
          layout: 'MainLayout',
          name: 'Saida'
        }
      }
    ]
  }
]
