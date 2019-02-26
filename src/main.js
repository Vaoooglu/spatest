import Vue from 'vue';
import App from './App.vue';
import {store} from './store';
import VueRouter from 'vue-router';
import {router} from './router';
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
