import axiosClient from "./axiosClient";
const BCPTapi = {
  getAll: (params) => {
    const url = "/listData";
    return axiosClient.get(url, { params });
  },
  delete: (id) => {
    const url = `/listData/${id}`;
    return axiosClient.delete(url);
  },
};

export default BCPTapi;
