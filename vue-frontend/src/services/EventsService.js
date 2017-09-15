import Api from '../services/Api';

export default {
  index () {
    return Api().get('events');
  },
  show (eventId) {
    return Api().get(`events/${eventId}`);
  },
  post (event) {
    return Api().post('events', event);
  },
  put (event) {
    return Api().put(`events/${event._id}`, event);
  }
};
