/* eslint-disable react/prop-types */
import { Fragment } from "react";

const RevenueCard = ({ amount, order, title }) => {
  return (
    <Fragment>
      <div className="h-24 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl mx-2 bg-blue-700 hover:bg-blue-400 text-white">
        <div className="flex">
          <div>{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="flex justify-between">
          <div className="text-2xl font-bold">Rp. {amount}</div>
          <div className="flex cursor-pointer">
            <div>
              {order >= 1 ? (
                <div className="text-lg text-white ">{order} order(s) </div>
              ) : null}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RevenueCard;
