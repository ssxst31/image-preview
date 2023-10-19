import { atom } from "recoil";

export const backImgState = atom<any>({
  key: "locationName",
  default: null,
});

export const dragAbleFileListState = atom<[]>({
  key: "dragAbleFileList",
  default: [],
});
