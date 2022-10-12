import request from './helpers/request';
import { extractData } from './helpers/helpers';

const urls = {
  root: '/trips',
  fetchByUserId: (userId) => `${urls.root}/${userId}`,
};

const fetchByUserId = (userId) => {
  return request.post(urls.fetchByUserId(userId)).then(extractData);
};

const api = { fetchByUserId };
export default api;
