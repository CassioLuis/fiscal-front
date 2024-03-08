import { shallowRef } from 'vue'
import { contabilRoutes, fiscalRoutes } from './modules'
import { Home } from '../components/icons'

export default [
  {
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          layout: 'MainLayout',
          svg: {
            component: shallowRef(Home)
          }
        }
      }
    ]
  },
  {
    module: 'fiscal',
    routes: fiscalRoutes
  },
  {
    module: 'contabil',
    routes: contabilRoutes
  }
]
