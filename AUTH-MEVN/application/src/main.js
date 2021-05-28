import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import vuetify from './plugins/vuetify';
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(VueCookie);
Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
