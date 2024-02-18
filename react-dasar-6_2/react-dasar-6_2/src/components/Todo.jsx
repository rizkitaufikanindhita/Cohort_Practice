/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";

const Todo = () => {
  let todo = [
    {
      id: 1,
      title: "backend",
      description: "belajar expressJS",
    },
    {
      id: 2,
      title: "frontend",
      description: "belajar reactJS",
    },
    {
      id: 3,
      title: "system design",
      description: "belajar docker",
    },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [getTodo, setTodo] = useState(todo);
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const addTodo = () => {
    setTodo([...getTodo, { id: getTodo.length + 1, title, description }]);
  };
  const [getId, setId] = useState(1);
  const [todoNew, setTodoNew] = useState([]);

  const showTodo = (id) => {
    setId(id);
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id == getId) {
        setTodoNew(todo[i]);
      }
    }
  };
  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            addTitle(e);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            addDescription(e);
          }}
        />
      </div>
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        {getTodo.map((item, index) => {
          return (
            <div key={index}>
              <div>{index + 1}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <br />
            </div>
          );
        })}
      </div>
      <span style={{ margin: "5px" }}>
        <button
          onClick={() => {
            showTodo(1);
          }}
        >
          1
        </button>
      </span>
      <span style={{ margin: "5px" }}>
        <button
          onClick={() => {
            showTodo(2);
          }}
        >
          2
        </button>
      </span>
      <span style={{ margin: "5px" }}>
        <button
          onClick={() => {
            showTodo(3);
          }}
        >
          3
        </button>
      </span>
      <div style={{ margin: "20px", border: "2px solid ", padding: "30px" }}>
        {todoNew.title}
        <hr />
        {todoNew.description}
      </div>
    </Fragment>
  );
};

export default Todo;

// useEffect bisa digunakan untuk membedakan premium dan free ketika fetch data/akses data dengan menggunakan setTimeout
// useEffect(()=>{
//    setTimeout(async()=>{
//        const response = await axios.get(url)
//        setTodo(response.data)
//  },5000)
// },[])
// kalau premium maka setTimeoutnya dipercepat bukan 5 detik
