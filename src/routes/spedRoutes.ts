import {
  IcmsIpiEntrada,
  IcmsIpiSaida,
  PisCofinsEntrada,
  PisCofinsSaida,
  EfdIcmsIpi,
  EfdPisCofins
} from '../components/view'

export default [
  {
    path: '/efd-icms-ipi',
    name: 'EFD ICMS IPI',
    component: EfdIcmsIpi,
    meta: {
      layout: 'MainLayout'
    },
    children: [
      {
        path: 'entrada',
        name: 'Entrada',
        component: IcmsIpiEntrada,
        meta: {
          layout: 'MainLayout'
        }
      },
      {
        path: 'saida',
        name: 'Saida',
        component: IcmsIpiSaida,
        meta: {
          layout: 'MainLayout'
        }
      }
    ]
  },
  {
    path: '/efd-pis-cofins',
    name: 'EFD PIS COFINS',
    component: EfdPisCofins,
    meta: {
      layout: 'MainLayout'
    },
    children: [
      {
        path: 'entrada',
        name: 'Entrada',
        component: PisCofinsEntrada,
        meta: {
          layout: 'MainLayout'
        }
      },
      {
        path: 'saida',
        name: 'Saida',
        component: PisCofinsSaida,
        meta: {
          layout: 'MainLayout'
        }
      }
    ]
  }
]