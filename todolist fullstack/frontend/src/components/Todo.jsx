/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Signout from "./Signout";
import Loading from "./Loading";
const url = import.meta.env.VITE_URL_ADDTODO;
const urlGet = import.meta.env.VITE_URL_GETTODO;
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const handleInputTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleInputDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  let timeOutTitle;
  const debounceTitle = (e) => {
    clearTimeout(timeOutTitle);
    timeOutTitle = setTimeout(() => {
      handleInputTitle(e);
    }, 500);
  };
  let timeOutDescription;
  const debounceDescription = (e) => {
    clearTimeout(timeOutDescription);
    timeOutDescription = setTimeout(() => {
      handleInputDescription(e);
    }, 500);
  };

  const body = {
    title: title,
    description: description,
  };

  // axiosWithToken ini ambil token dari localStorage dijadikan headers authorization untuk digunakan dalam middleware dibackend
  const axiosWithToken = axios.create({
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

  const addTodo = async () => {
    await axiosWithToken.post(url, body);
  };

  const showTodo = async () => {
    try {
      const response = await axiosWithToken.get(urlGet);
      setTodo(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoading(true);
    showTodo();
    setLoading(false);
  }, [todo]);

  if (loading == true) return <Loading />;

  const deleteTodo = async (e) => {
    await axiosWithToken.delete(`${url}/${e}`);
    alert("todo berhasil dihapus");
    showTodo();
  };

  const editTodo = async (e) => {
    await axiosWithToken.put(`${url}/${e}`);
    showTodo();
  };

  return (
    <Fragment>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="text"
          placeholder="title"
          onChange={(e) => {
            debounceTitle(e);
          }}
        />
      </div>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="text"
          placeholder="description"
          onChange={(e) => {
            debounceDescription(e);
          }}
        />
      </div>
      <button onClick={addTodo}>Add Todo</button>
      <div style={{ padding: 5, margin: 10 }}>
        {todo.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ margin: 10 }}>{item.title}</div>
              <div style={{ margin: 10 }}>{item.description}</div>
              <span style={{ margin: 10 }}>
                <button onClick={() => editTodo(item._id)}>
                  {item.completed == true ? "Completed" : "Mark as Completed"}
                </button>
              </span>
              <span style={{ margin: 10 }}>
                <button onClick={() => deleteTodo(item._id)}>Delete</button>
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ margin: 10 }}>
        <Signout />
      </div>
    </Fragment>
  );
};

export default Todo;
