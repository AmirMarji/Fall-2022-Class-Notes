import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ttt from './stores/temp';

import './assets/main.scss'
import temp from './stores/temp'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
