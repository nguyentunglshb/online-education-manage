import { API_URL } from "@routes";
import { getTokenFromLocalStorage } from "@utils";
import axios from "axios";
const queryString = require("query-string");

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    charset: "UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config: any) => {
  const token = getTokenFromLocalStorage;
  config.headers["Authourization"] = `Bearer ${token}`;
  delete axios.defaults.headers.common["Accept-Encoding"];
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error: any) => {
    if (error.res) {
      console.log(error.res);
    } else {
      console.log("Error", error.message);
    }
    throw error;
  }
);

export default axiosClient;
