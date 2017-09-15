import Api from '../services/Api';

export default {
  index () {
    return Api().get('events');
  },
  post (event) {
    return Api().post('events', event);
  }
};
