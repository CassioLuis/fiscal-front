// Plugins
import router from '../routes'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(router)
}
