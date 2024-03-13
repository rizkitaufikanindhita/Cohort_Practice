/* eslint-disable react-hooks/exhaustive-deps */
import useAppStore from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";
const urlSignUp = import.meta.env.VITE_URL_SIGNUP;
const urlSignIn = import.meta.env.VITE_URL_SIGNIN;
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);
  // kalau ada perubahan pada value atau delay akan return () => clearTimeout(timerId) jika tidak ada perubahan maka akan setDebounceValue(value) setelah delay terlewati

  return debounceValue;
};

export default { useSignUp, useSignIn, useDebounce };
