/* eslint-disable react-hooks/exhaustive-deps */
// custom hooks

import { useEffect } from "react";
import useAppStore from "./store";
import { shallow } from "zustand/shallow";

const useCount = () => {
  const [
    setCountWord,
    setCountCharacters,
    setCountInstagram,
    setCountFacebook,
    word,
    setJumlahKata,
    setJumlahHuruf,
  ] = useAppStore(
    (state) => [
      state.setCountWord(), //cuma ambil value
      state.setCountCharacters(), //cuma ambil value
      state.setCountInstagram(), //cuma ambil value
      state.setCountFacebook(), //cuma ambil value
      state.word,
      state.setJumlahKata,
      state.setJumlahHuruf,
    ],
    shallow
  );

  useEffect(() => {
    setJumlahKata();
    setJumlahHuruf();
  }, [word]);

  return {
    setCountWord: setCountWord,
    setCountCharacters: setCountCharacters,
    setCountInstagram: setCountInstagram,
    setCountFacebook: setCountFacebook,
    word: word,
    setJumlahKata: setJumlahKata,
    setJumlahHuruf: setJumlahHuruf,
  };
};

export default useCount;
