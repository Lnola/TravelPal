import request from './request';
import { extractData } from './helpers';

const urls = {
  root: '/auth',
  get login() {
    return this.root + '/login';
  },
};

const login = (credentials) => {
  return request.post(urls.login, credentials).then(extractData);
};

const api = { login };
export default api;
