/*
 * -> Providing Axios as a Service
 */

// IMPORTS:
import axios from "axios";

// LOGICS:
const service = axios.create({
  baseURL: process.env.MIX_API_URL,
  timeout: 5000
});

service.interceptors.response.use(
  // On response - status code 2xx
  function (response) {
    return response;
  },

  // On error - status code !2xx
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
