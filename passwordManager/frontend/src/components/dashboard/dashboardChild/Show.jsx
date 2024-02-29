/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import useAppStore from "../../../store";
import axios from "axios";

const Show = () => {
  const dataManager = useAppStore((state) => state.dataManager);

  const deleteData = async (e) => {
    await axios.delete(`http://localhost:3000/dashboard/${e}`);
  };

  return (
    <Fragment>
      <div className="w-fit h-fit p-4 grid grid-cols-4 bg-slate-500 m-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {dataManager.map((item, index) => {
          return (
            <div
              key={index}
              className="p-2 m-2 text-white rounded-lg shadow-lg bg-slate-700"
            >
              <div>{item.site}</div>
              <div>{item.account}</div>
              <div>{item.passwordAccount}</div>
              <button onClick={() => deleteData(item._id)}>
                <img
                  src="/delete.png"
                  alt="delte"
                  className="w-5 h-5 mx-2 mt-1"
                />
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Show;
