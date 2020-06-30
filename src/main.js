import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import vuefire from 'vuefire'
new Vue({
  router,
  store,
  vuefire,
  render: h => h(App)
}).$mount('#app')