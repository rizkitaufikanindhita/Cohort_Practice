/* eslint-disable no-empty */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);

  const factorial = (params) => {
    let result = 1;
    for (let i = 1; i <= params; i++) {
      result = result * i;
    }
    return result;
  };

  // Your solution starts here
  const expensiveValue = useMemo(() => factorial(input), [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
