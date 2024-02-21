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

  get logout() {
    return this.root + '/logout';
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

const logout = () => {
  return request.delete(urls.logout);
};

export default {
  login,
  register,
  refresh,
  logout,
};
