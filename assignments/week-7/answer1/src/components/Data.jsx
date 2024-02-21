/* eslint-disable react/prop-types */
import { Fragment } from "react";

const Data = ({ fol, like, photo }) => {
  return (
    <Fragment>
      <div className="grid items-center grid-cols-3 mx-4 mt-4 ">
        <div className="text-xs font-bold text-center">{fol}</div>
        <div className="text-xs font-bold text-center">{like}</div>
        <div className="text-xs font-bold text-center">{photo}</div>
        <div className="text-xs text-center text-slate-500">Followers</div>
        <div className="text-xs text-center text-slate-500">Likes</div>
        <div className="text-xs text-center text-slate-500">Photos</div>
      </div>
    </Fragment>
  );
};

export default Data;
