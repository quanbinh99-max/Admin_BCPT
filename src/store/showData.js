import { atom } from "recoil";

export const showState = atom({
  key: "showState", // unique ID (with respect to other atoms/selectors)
  default: { isShow: true },
});
