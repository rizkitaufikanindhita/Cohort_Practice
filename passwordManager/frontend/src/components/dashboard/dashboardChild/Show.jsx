/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import useAppStore from "../../../store";

const Show = () => {
  const dataManager = useAppStore((state) => state.dataManager);

  return (
    <Fragment>
      <div className="w-96 h-96 flex justify-center items-center bg-slate-500 m-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          {dataManager.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 text-white rounded-lg shadow-lg bg-slate-700"
              >
                <div>{item.account}</div>
                <div>{item.passwordAccount}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Show;
