/* eslint-disable react/prop-types */
import { Fragment } from "react";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";

const Data = () => {
  const [company, bio] = useAppStore(
    (state) => [state.company, state.bio],
    shallow
  );
  return (
    <Fragment>
      <div className="grid items-center grid-cols-1 mx-4 mt-4 ">
        <div className="text-lg font-bold text-center">{company}</div>
        <div className="text-xs text-center text-slate-500">Company</div>
        <div className="text-lg font-bold text-center mt-4">{bio}</div>
        <div className="text-xs text-center text-slate-500">Bio</div>
      </div>
    </Fragment>
  );
};

export default Data;
