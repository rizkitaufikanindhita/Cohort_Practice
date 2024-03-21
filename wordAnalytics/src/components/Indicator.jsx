/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react";
import useCount from "../hooks";

const Indicator = () => {
  const {
    setCountWord,
    setCountCharacters,
    setCountInstagram,
    setCountFacebook,
  } = useCount();

  return (
    <Fragment>
      <div className="grid h-full grid-cols-2 rounded-r-xl bg-slate-400 rounded-bl-xl">
        <div className="flex items-center justify-center w-full p-2 border ">
          <div>
            <div className="text-3xl font-semibold text-center lg:text-4xl 2xl:text-6xl">
              {setCountWord}
            </div>
            <div className="text-base text-center lg:text-xl 2xl:text-3xl">
              WORDS
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-2 border md:rounded-tr-xl ">
          <div>
            <div className="text-3xl font-semibold text-center lg:text-4xl 2xl:text-6xl">
              {setCountCharacters}
            </div>
            <div className="text-base text-center lg:text-xl 2xl:text-3xl">
              CHARACTERS
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-2 border rounded-bl-xl md:rounded-none">
          <div>
            <div className="text-3xl font-semibold text-center lg:text-4xl 2xl:text-6xl">
              {setCountInstagram}
            </div>
            <div className="text-base text-center lg:text-xl 2xl:text-3xl">
              INSTAGRAM
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-2 border rounded-br-xl">
          <div>
            <div className="text-3xl font-semibold text-center lg:text-4xl 2xl:text-6xl">
              {setCountFacebook}
            </div>
            <div className="text-base text-center lg:text-xl 2xl:text-3xl">
              FACEBOOKS
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Indicator;
