/* eslint-disable react/prop-types */
import { Fragment } from "react";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";

const Bio = () => {
  const [name, id] = useAppStore((state) => [state.name, state.id], shallow);
  console.log(name);
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <div className="mx-1 text-lg font-bold">{name}</div>
      </div>
      <div className="flex items-center justify-center text-xs text-slate-500 mt-2">
        {id}
      </div>
    </Fragment>
  );
};

export default Bio;
