import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueRouter);

//  mode: 'history' retira a # do endereço
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
