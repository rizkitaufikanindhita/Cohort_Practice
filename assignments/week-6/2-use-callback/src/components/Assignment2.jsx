/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import Alert from "./child1/Alert";

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
  const [inputText, setInputText] = useState("");
  const [num, setNum] = useState(0);

  // Your code starts here
  const showAlert = useCallback(() => {
    alert(inputText);
  }, [inputText]);
  // Your code ends here

  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text"
      />
      <br />
      <br />
      <button onClick={() => setNum(num + 1)}>count {num}</button>
      <br />
      <br />
      <Alert showAlert={showAlert} />
      <br />
      <br />
    </div>
  );
}
