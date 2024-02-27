import { Fragment } from "react";

const Add = () => {
  return (
    <Fragment>
      <div className="w-72 h-32 bg-slate-500 m-2 p-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center">
        <div className="grid col-span-1 text-white">
          <input
            type="text"
            placeholder="Account"
            className="rounded-md text-center w-64 h-fit my-2 border border-gray-500 bg-slate-600 "
          />
          <input
            type="password"
            placeholder="Password Account"
            className="rounded-md text-center w-64 h-fit my-2 border border-gray-500 bg-slate-600"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
