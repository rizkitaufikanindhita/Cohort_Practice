/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div style={{ border: "2px solid ", padding: 30, margin: 30 }}>
      <h3>Hi There</h3>
      {children}
    </div>
  );
};

export default CardWrapper;
