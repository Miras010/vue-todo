// Стоит придерживаться одного стиля и использовать только один вид кавычек
import { createApp } from 'vue'
import store from './store'
import router from './router/router'

import App from './App.vue'
import components from './components/ui'

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .mount('#app')

import 'bootstrap/dist/js/bootstrap'
