/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = import.meta.env.VITE_URL_SIGNUP;

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleInputPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  let timeOutUsername;
  const debounceUsername = (e) => {
    clearTimeout(timeOutUsername);
    timeOutUsername = setTimeout(() => {
      handleInputUsername(e);
    }, 100);
  };

  let timeOutPassword;
  const debouncePassword = (e) => {
    clearTimeout(timeOutPassword);
    timeOutPassword = setTimeout(() => {
      handleInputPassword(e);
    }, 100);
  };

  const body = {
    username: username,
    password: password,
  };

  const signup = async () => {
    const response = await axios.post(url, body);
    if (response.data == "user berhasil ditambah") {
      alert("sign up berhasil, silahkan login");
      navigate("/signin");
    } else {
      alert("user telah terdaftar");
    }
  };

  return (
    <Fragment>
      <h1>Sign up</h1>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="text"
          placeholder="username"
          onChange={(e) => debounceUsername(e)}
        />
      </div>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="password"
          placeholder="password"
          onChange={(e) => debouncePassword(e)}
        />
      </div>
      <button onClick={signup}>Sign up</button>
    </Fragment>
  );
};

export default Signup;
