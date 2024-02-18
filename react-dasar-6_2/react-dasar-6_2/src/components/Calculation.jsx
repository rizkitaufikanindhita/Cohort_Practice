/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, memo, useMemo } from "react";

// memo lets you skip re-rendering a component when its props are unchanged.
// memo for component
const Calculation = memo(function Calculation() {
  let data = [1, 2, 3, 4, 5, 6, 7];

  // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  // useMemo for function
  const perhitungan = useMemo(() => {
    return data.map((item) => item * 2);
  }, [data]);

  return (
    <Fragment>
      {perhitungan.map((item, index) => {
        return <span key={index}>{item} </span>;
      })}
    </Fragment>
  );
});

export default Calculation;
