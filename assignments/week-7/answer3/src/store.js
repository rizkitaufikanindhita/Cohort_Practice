import { create } from "zustand";

const useAppStore = create((set) => ({
  length: 0,
  setLength: (value) => set({ length: value }),
}));

export default useAppStore;
