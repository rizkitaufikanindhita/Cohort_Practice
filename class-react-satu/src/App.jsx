/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import TodoComp from "./components/TodoComp";
import InputComp from "./components/InputComp";

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([
    {
      title: "backend",
      description: "belajar expressJS",
    },
    {
      title: "frontend",
      description: "belajar reactJS",
    },
    {
      title: "devops",
      description: "belajar devops",
    },
  ]);
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueDescription, setInputValueDescription] = useState("");

  const AddButton = () => {
    setTodo([
      ...todo,
      {
        title: "new task",
        description: "new desc",
      },
    ]);
  };

  return (
    <>
      <button onClick={AddButton}>Add New Task</button>
      <TodoComp todo={todo}></TodoComp>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <div>
        <InputComp
          inputValueTitle={inputValueTitle}
          setInputValueTitle={setInputValueTitle}
          inputValueDescription={inputValueDescription}
          setInputValueDescription={setInputValueDescription}
          setTodo={setTodo}
          todo={todo}
        ></InputComp>
      </div>
    </>
  );
}

export default App;
