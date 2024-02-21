/* eslint-disable react/prop-types */
import { Fragment } from "react";

const Bio = ({ name, age, nation }) => {
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <div className="mx-1 text-xs font-bold">{name}</div>
        <div className="mx-1 text-xs text-slate-500">{age}</div>
      </div>
      <div className="flex items-center justify-center text-xs text-slate-500">
        {nation}
      </div>
    </Fragment>
  );
};

export default Bio;
