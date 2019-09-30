import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
