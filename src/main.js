import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/scss/main.scss'
import router from './router'
import {plugin} from './plugins/apiPlugin'
const pinia = createPinia()

createApp(App).use(router).use(plugin).use(pinia).mount('#app')
