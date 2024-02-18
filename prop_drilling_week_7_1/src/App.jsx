/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

export default App;
