import { create } from "zustand";

const useAppStore = create((set, getState) => ({
  countWord: 0,
  setCountWord: () => {
    return getState().countWord + getState().jumlahKata;
  },

  countCharacters: 0,
  setCountCharacters: () => {
    return getState().countCharacters + getState().jumlahHuruf;
  },

  countInstagram: 280,
  setCountInstagram: () => {
    return getState().countInstagram - getState().jumlahHuruf;
  },

  countFacebook: 2200,
  setCountFacebook: () => {
    return getState().countFacebook - getState().jumlahHuruf;
  },

  word: null,
  setWord: (word) => set({ word }),

  jumlahKata: 0,
  setJumlahKata: () => {
    if (getState().word == null) {
      set({ jumlahKata: 0 });
    } else {
      let kalimat = getState().word;
      let jumlah = kalimat.trim().split(/\s+/);
      set({ jumlahKata: jumlah.length });
    }
  },

  jumlahHuruf: 0,
  setJumlahHuruf: () => {
    if (getState().word == null) {
      set({ jumlahHuruf: 0 });
    } else {
      let kalimat = getState().word;
      let jumlahnya = kalimat.replace(/\s+/g, "").length;
      set({ jumlahHuruf: jumlahnya });
    }
  },
}));

export default useAppStore;
