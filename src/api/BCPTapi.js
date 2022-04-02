import axiosClient from "./axiosClient";
const BCPTapi = {
  getAll: (params) => {
    const url = "/listData";
    return axiosClient.get(url, { params });
  },
};

export default BCPTapi;
