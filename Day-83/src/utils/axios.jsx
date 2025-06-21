import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  // withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    console.log("Request made with ", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("Response received with ", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
