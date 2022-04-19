import axiosClient from "./axiosClient";
const BCPTapi = {
  getAll: (url, params) => {
    return axiosClient.get(url, params);
  },
  insertBCPT: (url, params, config) => {
    return axiosClient.post(url, params, config);
  },
  deleteBCPT: (url, config) => {
    return axiosClient.delete(url, config);
  },
  caculateBCPT: (url, config) => {
    return axiosClient.get(url, config);
  },
};

export default BCPTapi;
