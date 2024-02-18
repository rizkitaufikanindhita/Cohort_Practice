import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const refInput = useRef(null);

  const handleButtonClick = () => {
    refInput.current.focus();
  };

  const handleSubmit = () => {
    console.log(refInput.current.value);
  };

  useEffect(() => {
    handleSubmit();
  }, [refInput]);

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={refInput} />
      <button onClick={handleButtonClick}>Focus Input</button>
      <button onClick={handleSubmit}>Submit Input</button>
    </div>
  );
}
