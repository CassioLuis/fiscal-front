import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import MainLayout from './components/layouts/MainLayout/index.vue'
import { registerPlugins } from './plugins'
import useSidebar from './composable/useSidebar'

const app = createApp(App)

registerPlugins(app)

// COMPOSABLES
app.provide('useSidebar', useSidebar)

// COMPONENTS
app.component('MainLayout', MainLayout)

app.mount('#app')
