import { atom } from "recoil";
export const DataInput = atom({
  key: "DataInput", // unique ID (with respect to other atoms/selectors)
  default: [],
});
