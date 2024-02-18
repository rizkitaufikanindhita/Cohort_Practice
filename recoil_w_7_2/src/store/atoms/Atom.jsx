import { atom } from "recoil";

const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const inputAtom = atom({
  key: "inputAtom",
  default: "",
});

export default { countAtom, inputAtom };
