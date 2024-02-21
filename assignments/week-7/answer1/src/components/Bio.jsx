/* eslint-disable react/prop-types */
import { Fragment } from "react";

const Bio = ({ name, age, nation }) => {
  return (
    <Fragment>
      <div className="flex justify-center items-center">
        <div className="mx-2">{name}</div>
        <div className="mx-2">{age}</div>
      </div>
      <div className="flex justify-center items-center">{nation}</div>
    </Fragment>
  );
};

export default Bio;
