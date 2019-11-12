import Vue from 'vue'
import FormTeddy from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(FormTeddy)
}).$mount('#app');
