import request from './helpers/request';
import { extractData } from './helpers/helpers';

const urls = {
  root: '/trips',
  get add() {
    return this.root + '/add';
  },
  get edit() {
    return this.root + '/edit';
  },
};

const fetch = () => {
  return request.get(urls.root).then(extractData);
};

const add = (params) => {
  return request.post(urls.add, params).then(extractData);
};

const edit = (params) => {
  return request.post(urls.edit, params).then(extractData);
};

export default {
  fetch,
  add,
  edit,
};
