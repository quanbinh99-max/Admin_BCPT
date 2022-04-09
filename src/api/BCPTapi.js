import axiosClient from "./axiosClient";
const BCPTapi = {
  getAll: (url, params) => {
    return axiosClient.get(url, params);
  },
};

export default BCPTapi;
