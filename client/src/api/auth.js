import request from './helpers/request';
import { extractData } from './helpers/helpers';

const urls = {
  root: '/auth',
  get login() {
    return this.root + '/login';
  },
  get register() {
    return this.root + '/register';
  },

  get refresh() {
    return this.root + '/refresh';
  },
};

const login = (credentials) => {
  return request.post(urls.login, credentials).then(extractData);
};

const register = (credentials) => {
  return request.post(urls.register, credentials).then(extractData);
};

const refresh = (credentials) => {
  return request.post(urls.refresh, credentials).then(extractData);
};

const api = { login, register, refresh };
export default api;
