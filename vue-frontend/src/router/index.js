import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import EventsNew from '../components/EventsNew.vue';
import Events from '../components/Events.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'hello',
      path: '/',
      component: Hello
    },
    {
      name: 'events',
      path: '/events',
      component: Events
    },
    {
      name: 'eventsNew',
      path: '/events/new',
      component: EventsNew
    }
  ]
});
