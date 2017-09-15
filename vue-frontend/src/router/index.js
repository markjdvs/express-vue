import Vue from 'vue';
import VueRouter from 'vue-router';
import Events from '../components/Events.vue';
import EventsNew from '../components/EventsNew.vue';
import EventsShow from '../components/EventsShow.vue';
import EventsEdit from '../components/EventsEdit.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'events',
      path: '/events',
      component: Events
    },
    {
      name: 'events-new',
      path: '/events/new',
      component: EventsNew
    },
    {
      name: 'events-show',
      path: '/events/:eventId',
      component: EventsShow
    },
    {
      name: 'events-edit',
      path: '/events/:eventId/edit',
      component: EventsEdit
    },
    {
      path: '*',
      redirect: 'events'
    }
  ]
});
