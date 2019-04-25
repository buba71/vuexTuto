import Vue from 'vue'
import App from './App'
import vuex from 'vuex';
import Store from './VuexStore';

Vue.use(vuex);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})
