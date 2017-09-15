import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
// import Register from '../components/Register.vue';
import EventsNew from '../components/EventsNew.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'hello',
      path: '/',
      component: Hello
    },
    // {
    //   name: 'register',
    //   path: '/register',
    //   component: Register
    // },
    {
      name: 'eventsNew',
      path: '/events/new',
      component: EventsNew
    }
  ]
});
