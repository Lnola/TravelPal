import axios from "axios";

export const authorizedRequest = async (url, method, payload) => {
  const token = getTokens();
  axios.defaults.headers.common["Authorization"] = `Bearer ${token.access}`;

  try {
    let response = null;

    switch (method) {
      case "get":
        response = await axios.get(url);
        break;
      case "post":
        response = await axios.post(url, payload);
        break;
      case "delete":
        response = await axios.delete(url);
        break;

      default:
        break;
    }
    if (response !== null) return response.data;
  } catch (error) {
    if (url !== "/api/auth/login") {
      const userCredentials = {
        username: window.localStorage.getItem("username")
      };

      const refreshResponse = await axios.post("/api/auth/refresh", {
        access: "",
        refresh: token.refresh,
        userCredentials
      });

      const { accessToken, refreshToken } = refreshResponse.data;
      setTokens(accessToken, refreshToken);

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      let response = null;

      switch (method) {
        case "get":
          response = await axios.get(url);
          break;
        case "post":
          response = await axios.post(url, payload);
          break;
        case "delete":
          response = await axios.delete(url);
          break;

        default:
          break;
      }
      if (response !== null) return response.data;
    }
  }
};

export const getTokens = () => {
  const refresh = window.localStorage.getItem("refreshToken");
  const access = window.localStorage.getItem("accessToken");
  return { access, refresh };
};

export const setTokens = async (accessToken, refreshToken) => {
  window.localStorage.setItem("accessToken", accessToken);
  window.localStorage.setItem("refreshToken", refreshToken);
};
