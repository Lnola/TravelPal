import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const { FORBIDDEN } = StatusCodes;

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

const isAuthError = (err) => [FORBIDDEN].includes(err.response.status);

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
