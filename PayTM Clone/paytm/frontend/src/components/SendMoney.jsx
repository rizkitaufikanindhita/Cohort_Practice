/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";

const SendMoney = () => {
  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-600">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-gray-200 w-96 h-2/5 rounded-xl flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full h-full text-center px-7">
              <div className="mt-10 mb-3 text-4xl font-bold">Sent Money</div>
              <div className="mt-10 text-3xl font-semibold text-left">
                Friend's Name
              </div>
              <div className="mt-5 text-xl font-semibold text-left">
                Amount in $
              </div>
              <div className="text-left">
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="w-full p-2 mt-5 text-left bg-gray-200 border border-white rounded-md"
                />
              </div>
              <div className="p-2 mt-10 font-semibold text-white rounded-md bg-slate-700">
                <button>Initiate Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SendMoney;
