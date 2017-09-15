import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import EventsNew from '../components/EventsNew.vue';
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
      name: 'eventsIndex',
      path: '/events',
      component: EventsIndex
    },
    {
      name: 'eventsNew',
      path: '/events/new',
      component: EventsNew
    }
  ]
});
