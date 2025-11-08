import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './store/auth'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const auth = useAuthStore()
if (auth.token && !auth.user) {
  auth.user = JSON.parse(localStorage.getItem('user'))

}

app.mount('#app')
