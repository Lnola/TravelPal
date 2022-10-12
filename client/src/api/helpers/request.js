import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import { authApi } from '../index';
import { getTokens, getUsername, setTokens } from '../../utils/storage';

const { FORBIDDEN } = StatusCodes;

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

client.interceptors.request.use((req) => {
  const { access } = getTokens();
  req.headers.authorization = access ? `Bearer ${access}` : '';

  return req;
});

const isAuthError = (err) => [FORBIDDEN].includes(err.response.status);
const isTokenError = (err) =>
  isAuthError(err) && err.response.data.message === 'Token expired';

client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (isTokenError(err)) {
      ensureTokens();
      return;
    }

    if (isAuthError(err)) {
      // TODO: add logout function
      return window.location.reload();
    }

    throw err;
  }
);

const ensureTokens = async () => {
  const tokens = getTokens();
  const username = getUsername();
  const payload = { ...tokens, username };

  try {
    const newTokens = await authApi.refresh(payload);
    setTokens(newTokens);
  } catch (err) {
    console.log(err);
  }
};

export default client;
