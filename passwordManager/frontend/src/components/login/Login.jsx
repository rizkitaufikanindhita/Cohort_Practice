import { Fragment } from "react";
import useAppStore from "../../store";
import { shallow } from "zustand/shallow";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL_LOGIN;

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
                  <input
                    type="text"
                    placeholder="Username"
                    className="my-2 text-center border border-gray-500 rounded-md w-fit h-fit bg-slate-600 "
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="my-2 text-center border border-gray-500 rounded-md w-fit h-fit bg-slate-600"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="w-full p-2 my-2 rounded-md h-fit bg-slate-600"
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
