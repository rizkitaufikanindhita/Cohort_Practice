/* eslint-disable react/prop-types */
import { Fragment } from "react";

const CardWrapper = ({ children }) => {
  return (
    <Fragment>
      <div>Card Data : </div>
      {children}
    </Fragment>
  );
};

export default CardWrapper;
