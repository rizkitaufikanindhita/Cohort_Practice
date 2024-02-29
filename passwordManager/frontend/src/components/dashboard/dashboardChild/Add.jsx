import { Fragment } from "react";
import useAppStore from "../../../store";
import { shallow } from "zustand/shallow";

const Add = () => {
  const [setSite, setAccount, setPasswordAccount] = useAppStore(
    (state) => [state.setSite, state.setAccount, state.setPasswordAccount],
    shallow
  );
  return (
    <Fragment>
      <div className="w-72 h-32 bg-slate-500 m-2 p-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center">
        <div className="grid col-span-1 text-white">
          <input
            type="text"
            placeholder="Site"
            className="w-64 my-2 text-center border border-gray-500 rounded-md h-fit bg-slate-600 "
            onChange={(e) => setSite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Account"
            className="w-64 my-2 text-center border border-gray-500 rounded-md h-fit bg-slate-600 "
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password Account"
            className="w-64 my-2 text-center border border-gray-500 rounded-md h-fit bg-slate-600"
            onChange={(e) => setPasswordAccount(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
