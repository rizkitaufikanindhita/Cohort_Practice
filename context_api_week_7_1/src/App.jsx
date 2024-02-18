/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import CountContext from "./context";

function App() {
  const [count, setCount] = useState(0);

  // wrap component parent that component childern from component parent wants to use the teleporter value inside a provider
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

export default App;

// lanjut week 7.1 01:29:00
