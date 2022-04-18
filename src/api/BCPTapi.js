import axiosClient from "./axiosClient";
const BCPTapi = {
  getAll: (url, params) => {
    return axiosClient.get(url, params);
  },
  insertBCPT: (url, params, config) => {
    return axiosClient.post(url, params, config);
  },
};

export default BCPTapi;
