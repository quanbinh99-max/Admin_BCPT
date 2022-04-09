import { atom } from "recoil";

export const statePage = atom({
  key: "statePage", // unique ID (with respect to other atoms/selectors)
  default: { page: 1 },
});
