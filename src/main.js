import { createApp } from 'vue'
import './style'
import App from './App'
import router from './router'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persistedstate)

createApp(App).use(router).use(pinia).mount('#app')
