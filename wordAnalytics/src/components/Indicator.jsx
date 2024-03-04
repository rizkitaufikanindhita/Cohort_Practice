/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";

const Indicator = () => {
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
      state.setCountWord(),
      state.setCountCharacters(),
      state.setCountInstagram(),
      state.setCountFacebook(),
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

  return (
    <Fragment>
      <div className="grid h-full grid-cols-2 rounded-r-xl bg-slate-400">
        <div className="flex items-center justify-center w-full text-xs border">
          <div>
            <div className="text-4xl font-semibold text-center">
              {setCountWord}
            </div>
            <div className="text-center">WORDS</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full text-xs border rounded-tr-xl">
          <div>
            <div className="text-4xl font-semibold text-center">
              {setCountCharacters}
            </div>
            <div className="text-center">CHARACTERS</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full text-xs border">
          <div>
            <div className="text-4xl font-semibold text-center">
              {setCountInstagram}
            </div>
            <div className="text-center">INSTAGRAM</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full text-xs border rounded-br-xl">
          <div>
            <div className="text-4xl font-semibold text-center">
              {setCountFacebook}
            </div>
            <div className="text-center">FACEBOOKS</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Indicator;
