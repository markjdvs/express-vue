import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  }
};

// AuthenticationService.register({
//   email: 'testemail@gmail.com',
//   password: '0000'
// });
