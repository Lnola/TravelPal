import request from './helpers/request';
import { extractData } from './helpers/helpers';

const urls = {
  root: '/trips',
};

const fetch = () => {
  return request.get(urls.root).then(extractData);
};

const api = { fetch };
export default api;
