import { Fragment, useState } from "react";
import useAppStore from "../../store";
import { shallow } from "zustand/shallow";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL_LOGIN;
import hideIcon from "/hide.png";
import showIcon from "/view.png";

const Login = () => {
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
    try {
      const response = await axios.post(url, body);
      const username = response.data.data;
      if (response.data.data == "user tidak ada") {
        alert("user tidak ada");
      } else if (response.data.data == "password salah") {
        alert("password salah");
      } else {
        localStorage.setItem("username", username);
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  let valShowPassword = false;
  const [showPassword, setShowPassword] = useState(valShowPassword);
  const togglePassword = () => {
    setShowPassword(!valShowPassword);
  };
  valShowPassword = showPassword;

  return (
    <Fragment>
      <div className="w-full h-screen bg-slate-700">
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center w-full h-screen bg-slate-700 ">
            <div className="text-center">
              <div className="mx-auto mb-5 w-14 h-14">
                <img src="/pngegg.png" alt="" />
              </div>
              <div className="w-64 h-48 bg-slate-500 m-2 p-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center">
                <div className="grid col-span-1 text-white">
                  <div className="mb-2 rounded-md shadow-lg w-50 h-fit bg-slate-600">
                    <input
                      type="text"
                      placeholder="Username"
                      className="my-2 text-center bg-slate-600 focus:outline-none"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex px-5 rounded-md w-fit bg-slate-600">
                    <div className="flex px-6 mx-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="my-2 text-center rounded-md bg-slate-600 focus:outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="w-6 h-6 mt-2 ">
                        <button onClick={togglePassword}>
                          <img
                            src={showPassword ? hideIcon : showIcon}
                            alt={showPassword ? "Hide" : "Show"}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full p-2 my-2 bg-blue-500 rounded-md h-fit"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
