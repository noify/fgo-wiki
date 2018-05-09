import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDataTable,
  VCard,
  VTextField,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDataTable,
    VCard,
    VTextField,
    transitions
  },
  theme: {
    primary: '#2196f3',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
})

Vue.config.productionTip = false

Vue.prototype.$assetsBaseUrl = 'http://kazemai.github.io/fgo-vz/'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
