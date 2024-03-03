import { Fragment } from "react";

const Indicator = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 h-full rounded-r-xl bg-slate-400">
        <div className="border w-full flex justify-center items-center">
          WORDS
        </div>
        <div className="border w-full  flex justify-center items-center rounded-tr-xl">
          CHARACTERS
        </div>
        <div className="border w-full  flex justify-center items-center">
          INSTAGRAM
        </div>
        <div className="border w-full  flex justify-center items-center rounded-br-xl">
          FACEBOOKS
        </div>
      </div>
    </Fragment>
  );
};

export default Indicator;
