import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import Register from '../components/Register.vue';
import EventsIndex from '../components/EventsIndex.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'hello',
      path: '/',
      component: Hello
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'eventsIndex',
      path: '/events',
      component: EventsIndex
    }
  ]
});
