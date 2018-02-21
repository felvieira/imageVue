import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import VueResource from 'vue-resource';

Vue.use(VueMaterial);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
