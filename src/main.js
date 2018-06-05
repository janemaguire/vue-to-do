import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // Providing the store to the root instance
  // Store is now injected into all child components of the root
  store,
  render: h => h(App)
}).$mount('#app')
