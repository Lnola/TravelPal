import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { getTokens } from '../../utils/storage';

const { FORBIDDEN } = StatusCodes;

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

const isAuthError = (err) => [FORBIDDEN].includes(err.response.status);

client.interceptors.request.use((req) => {
  const { access } = getTokens();
  req.headers.authorization = access ? `Bearer ${access}` : '';

  return req;
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (isAuthError(err)) {
      // TODO: add logout function
      return window.location.reload();
    }

    throw err;
  }
);

export default client;
