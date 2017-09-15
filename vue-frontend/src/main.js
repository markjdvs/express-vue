import Vue from 'vue';
import vueRouter from './router/index.js';
import App from './App.vue';

new Vue({
  el: '#app',
  router: vueRouter,
  render: h => h(App)
});
