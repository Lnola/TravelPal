const getTokens = () => {
  const refresh = window.localStorage.getItem('refreshToken');
  const access = window.localStorage.getItem('accessToken');
  return { access, refresh };
};

const setTokens = async (accessToken, refreshToken) => {
  window.localStorage.setItem('accessToken', accessToken);
  window.localStorage.setItem('refreshToken', refreshToken);
};

const clearLocalStorage = () => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('id');
};

const setCredentials = ({ accessToken, refreshToken, userId, username }) => {
  setTokens(accessToken, refreshToken);
  window.localStorage.setItem('id', userId);
  window.localStorage.setItem('username', username);
};

export { getTokens, setTokens, clearLocalStorage, setCredentials };
