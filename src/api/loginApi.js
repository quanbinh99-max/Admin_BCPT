import axiosClient from "./axiosClient";

export const loginApi = {
  getToken: (params) => {
    const url = "https://beta.wichart.vn/wichartapi/admin/user/login";
    return axiosClient.post(url, params);
  },
};
