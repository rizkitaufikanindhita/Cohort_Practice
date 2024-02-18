/* eslint-disable react/prop-types */

import { useContext } from "react";
import CountContext from "../context";

/* eslint-disable no-unused-vars */
const Button = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button style={{ margin: "10px" }} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ margin: "10px" }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Button;
