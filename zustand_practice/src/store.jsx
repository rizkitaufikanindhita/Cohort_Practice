/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";

const useAppStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),

  username: "rizki",
  updateUsername: (username) => set({ username }), // sama dengan yang bawah
}));

const useInputStore = create((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));

const useFetchStore = create((set) => ({
  data: [],
  fetchData: async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      set({ data: [response.data] });
    } catch (e) {
      console.log(e);
    }
  },
  logoutData: () => set({ data: [] }),
}));

export default { useAppStore, useInputStore, useFetchStore };
