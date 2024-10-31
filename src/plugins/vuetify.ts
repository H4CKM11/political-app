// src/plugins/vuetify.ts
import 'vuetify/styles' // Import Vuetify styles
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // Import all components
import * as directives from 'vuetify/directives' // Import all directives

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {},
    sets: {},
  },
})

export default vuetify
