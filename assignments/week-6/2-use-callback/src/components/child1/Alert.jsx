/* eslint-disable react/prop-types */
import { memo } from "react";

const Alert = memo(function Alert({ showAlert }) {
  return <button onClick={showAlert}>Show Alert</button>;
});

export default Alert;
