import { Fragment, useState } from "react";
import Generate from "./Generate";
import useAppStore from "../store";

const Form = () => {
  const setLength = useAppStore((state) => state.setLength);
  const [value, setValue] = useState();
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="w-64 h-fit rounded-xl p-4 shadow-xl flex justify-center items-center bg-slate-200">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="length of paragraph"
                  className="border-2 w-fit text-center rounded-md"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className="bg-cyan-500 w-fit rounded-md p-2">
                  <button
                    className="text-white"
                    onClick={() => setLength(value)}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 w-96 h-fit rounded-xl p-4 shadow-xl flex justify-center items-center bg-slate-200 my-5">
          <Generate />
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
