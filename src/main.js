import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from "materialize-css";



Vue.config.productionTip = false
import vuefire from 'vuefire'
new Vue({
    router,
    store,
    vuefire,
    M,
    render: h => h(App)
}).$mount('#app')