import axios from 'axios';
import { getTokens, setTokens } from './storage';

export const authorizedRequest = async (url, method, payload) => {
  const token = getTokens();
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.access}`;

  try {
    let response = null;

    switch (method) {
      case 'get':
        response = await axios.get(url);
        break;
      case 'post':
        response = await axios.post(url, payload);
        break;
      case 'delete':
        response = await axios.delete(url);
        break;

      default:
        break;
    }
    if (response !== null) return response.data;
  } catch (error) {
    if (url !== '/api/auth/login') {
      const userCredentials = {
        username: window.localStorage.getItem('username'),
      };

      const refreshResponse = await axios.post('/api/auth/refresh', {
        access: '',
        refresh: token.refresh,
        userCredentials,
      });

      const { accessToken, refreshToken } = refreshResponse.data;
      setTokens(accessToken, refreshToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      let response = null;

      switch (method) {
        case 'get':
          response = await axios.get(url);
          break;
        case 'post':
          response = await axios.post(url, payload);
          break;
        case 'delete':
          response = await axios.delete(url);
          break;

        default:
          break;
      }
      if (response !== null) return response.data;
    }
  }
};
