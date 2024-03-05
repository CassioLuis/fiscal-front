import spedRoutes from "./spedRoutes"
import { Home } from "../components/view"

export default [
  {
    module: 'inicio',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          layout: 'MainLayout'
        }
      }
    ]
  },
  {
    module: 'Sped',
    routes: spedRoutes
  }
]