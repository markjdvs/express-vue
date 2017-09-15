import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'register',
      path: '/register',
      component: Register
    }
  ]
});
