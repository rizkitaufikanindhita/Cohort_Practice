import { useContext } from "react";
import CountContext from "../context";

/* eslint-disable react/prop-types */
const CountRendered = () => {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};

export default CountRendered;
