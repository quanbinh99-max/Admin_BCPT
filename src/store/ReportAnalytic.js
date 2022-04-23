import { atom } from "recoil";
export const BCPTData = atom({
  key: "BCPTData", // unique ID (with respect to other atoms/selectors)
  default: [],
});

export const access_token = atom({
  key: "access_token", // unique ID (with respect to other atoms/selectors)
  default: "",
});

export const showState = atom({
  key: "showState", // unique ID (with respect to other atoms/selectors)
  default: { isShow: true },
});

export const statePage = atom({
  key: "statePage", // unique ID (with respect to other atoms/selectors)
  default: { page: 1 },
});
