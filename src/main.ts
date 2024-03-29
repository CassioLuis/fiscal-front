import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { MainLayout } from './components/layouts'
import useSidebar from './composable/useSidebar'
import router from './routes'


const app = createApp(App)

// COMPOSABLES
app.provide('useSidebar', useSidebar)

// COMPONENTS
app.component('MainLayout', MainLayout)


app.use(router)
app.mount('#app')
