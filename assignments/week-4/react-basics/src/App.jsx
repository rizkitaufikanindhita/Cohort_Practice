import { useState } from "react";
import "./App.css";

function App() {
  const [getTodo, setTodo] = useState("");

  return (
    <>
      <div>
        <input type="text" placeholder="title" />
      </div>
      <div>
        <input type="text" placeholder="description" />
      </div>
      <div>
        <button onClick={() => setTodo((e) => e.target.value)}>Add Todo</button>
      </div>

      <div>{getTodo}</div>
    </>
  );
}

export default App;
