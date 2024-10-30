import { createApp } from 'vue'
import Home from './pages/Home.vue'
import vuetify from './plugins/vuetify' // Import Vuetify plugin
import '@mdi/font/css/materialdesignicons.css' // Import MDI icons

import './index.css'

const app = createApp(Home)
app.use(vuetify)
app.mount('#app-home')