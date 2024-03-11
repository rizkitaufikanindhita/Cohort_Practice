import { create } from "zustand";

const useAppStore = create((set) => ({
  username: "",
  password: "",
  firstName: "",
  lastName: "",

  setUsername: (valueUsername) => set({ username: valueUsername }),
  setPassword: (password) => set({ password }),
  setFirstName: (value) => set({ firstName: value }),
  setLastName: (valueName) => set({ lastName: valueName }),

  balance: null,
  setBalance: (value) => set({ balance: value }),
}));

export default useAppStore;
