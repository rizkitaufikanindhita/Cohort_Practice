import { create } from "zustand";

const useAppStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),

  password: "",
  setPassword: (password) => set({ password }),
}));

export default useAppStore;
