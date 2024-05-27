import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

//on crée un objet reactif
const GStore = reactive({
  flashMessage: ''
})
//on donne accès à l'objet reactif dans toute l'app
app.provide('GStore', GStore)

app.mount('#app')
