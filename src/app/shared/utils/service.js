import axios from "axios";
import env from "./env";

export const elearn = axios.create({
  baseURL: `${env.api}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

elearn.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

elearn.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.reload();
      } else {
        // message.warn("Xəta baş verdi.");
      }
      return Promise.reject(error);
    }
  }
);

export default elearn;
