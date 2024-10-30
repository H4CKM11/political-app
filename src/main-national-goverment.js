import { createApp } from 'vue'
import NationalGoverment from './pages/National-Goverment.vue'
import vuetify from './plugins/vuetify' // Import Vuetify plugin
import '@mdi/font/css/materialdesignicons.css' // Import MDI icons

import './index.css'

const app = createApp(NationalGoverment)
app.use(vuetify)
app.mount('#app-home')