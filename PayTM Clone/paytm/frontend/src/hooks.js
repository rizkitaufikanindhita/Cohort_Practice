import useAppStore from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";
const urlSignUp = import.meta.env.VITE_URL_SIGNUP;
const urlSignIn = import.meta.env.VITE_URL_SIGNIN;
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const [
    username,
    setUsername,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  ] = useAppStore(
    (state) => [
      state.username,
      state.setUsername,
      state.password,
      state.setPassword,
      state.firstName,
      state.setFirstName,
      state.lastName,
      state.setLastName,
    ],
    shallow
  );

  const body = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  const signup = async () => {
    const response = await axios.post(urlSignUp, body);
    if (response.data.data == "user telah terdaftar") {
      alert("user telah terdaftar");
    } else {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("username", username);
      navigate("/dashboard");
    }
  };

  return {
    username: username,
    setUsername: setUsername,
    password: password,
    setPassword: setPassword,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    signup,
  };
};

const useSignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername, password, setPassword] = useAppStore(
    (state) => [
      state.username,
      state.setUsername,
      state.password,
      state.setPassword,
    ],
    shallow
  );

  const body = {
    username: username,
    password: password,
  };

  const login = async () => {
    const response = await axios.post(urlSignIn, body);
    if (response.data.data == "Username tidak terdaftar") {
      alert("Username tidak terdaftar");
    } else if (response.data.data == "Password Salah") {
      alert("Password Salah");
    } else {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("username", username);
      navigate("/dashboard");
    }
  };

  return {
    username: username,
    setUsername: setUsername,
    setPassword: setPassword,
    login,
  };
};

export default { useSignUp, useSignIn };
