/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, memo, useCallback, useState } from "react";

const CounterUseCallback = memo(function CounterUseCallback({
  countNew,
  word,
}) {
  return (
    <Fragment>
      <h2>contoh useCallback</h2>
      <button onClick={countNew}>this is the word : {word}</button>
    </Fragment>
  );
});

export default CounterUseCallback;
