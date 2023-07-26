import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App'
import './common/css/base'
import router from './router'

const pinia = createPinia()
pinia.use(persistedstate)

createApp(App).use(router).use(pinia).mount('#app')
