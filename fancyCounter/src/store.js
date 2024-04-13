import { create } from "zustand";

const useAppStore = create((set, getState) => ({
  counter: 0,
  setIncrease: () => {
    const currentCounter = getState().counter;
    currentCounter < 10 ? set({ counter: getState().counter + 1 }) : null;
  },
  setDecrease: () => {
    const currentCounter = getState().counter;
    if (currentCounter > 0) {
      set({ counter: currentCounter - 1 });
    } else {
      alert("tidak bisa lebih kecil dari 0");
    }
  },
  reset: () => set({ counter: 0 }),
}));

export default useAppStore;
