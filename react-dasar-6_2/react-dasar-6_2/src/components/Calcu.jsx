/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useMemo, useState } from "react";

const Calcu = () => {
  const [input, setInput] = useState(0);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const perhitungan = useMemo(
    function sum() {
      let count = 0;
      let inputNew = parseInt(input);
      for (let i = 0; i <= inputNew; i++) {
        count = count + i;
      }
      return count;
    },
    [input]
  );

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <div>
        sum from 1 to {input} is {perhitungan}
      </div>
    </Fragment>
  );
};

export default Calcu;
