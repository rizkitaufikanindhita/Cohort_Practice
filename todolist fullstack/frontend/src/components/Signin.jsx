/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = import.meta.env.VITE_URL_SIGNIN;

const Signin = () => {
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

  const signin = async () => {
    try {
      const response = await axios.post(url, body);
      const token = response.data.data;

      localStorage.setItem("token", token);

      if (response.data.data == "user tidak terdaftar") {
        alert("User tidak terdaftar");
      } else if (response.data.data == "password salah") {
        alert("Password salah");
      } else {
        navigate(`/${username}/todo`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <h1>Sign in</h1>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="text"
          placeholder="username"
          onChange={debounceUsername}
        />
      </div>
      <div>
        <input
          style={{ padding: 5, margin: 10 }}
          type="password"
          placeholder="password"
          onChange={debouncePassword}
        />
      </div>
      <button onClick={signin}>Sign in</button>
    </Fragment>
  );
};

export default Signin;
