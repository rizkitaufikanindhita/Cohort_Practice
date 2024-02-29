import { create } from "zustand";
import axios from "axios";
const url = import.meta.env.VITE_URL_DASHBOARD;

const useAppStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),

  password: "",
  setPassword: (password) => set({ password }),

  dataManager: [],
  fetchData: async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.data;
      set({ dataManager: data });
    } catch (e) {
      console.log(e);
    }
  },

  site: "",
  setSite: (site) => set({ site }),

  account: "",
  setAccount: (account) => set({ account }),

  passwordAccount: "",
  setPasswordAccount: (passwordAccount) => set({ passwordAccount }),
}));

export default useAppStore;
