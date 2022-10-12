import request from './request';
import { extractData } from './helpers';

const urls = {
  root: '/auth',
  get login() {
    return this.root + '/login';
  },
  get register() {
    return this.root + '/register';
  },
};

const login = (credentials) => {
  return request.post(urls.login, credentials).then(extractData);
};

const register = (credentials) => {
  return request.post(urls.register, credentials).then(extractData);
};

const api = { login, register };
export default api;
