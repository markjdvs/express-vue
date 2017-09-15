import Vue from 'vue';
import VueRouter from './router/index.js';
import App from './App.vue';

new Vue({
  el: '#app',
  router: VueRouter,
  render: h => h(App)
});
