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
}));

export default useAppStore;
