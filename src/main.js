import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
