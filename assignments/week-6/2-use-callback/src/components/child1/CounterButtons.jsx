/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const CounterButtons = memo(function CounterButtons({
  onIncrement,
  onDecrement,
}) {
  return (
    <Fragment>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </Fragment>
  );
});

export default CounterButtons;
