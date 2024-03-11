/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import hooks from "../hooks";

const Signin = () => {
  const { useSignIn } = hooks;
  const { setUsername, setPassword, login } = useSignIn();

  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-600">
        <div className="flex items-center justify-center h-screen ">
          <div className="bg-gray-200 w-96 h-3/6 rounded-xl flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full h-full text-center px-7">
              <div className="mt-10 mb-3 text-4xl font-bold">Sign In</div>
              <div className="text-slate-500 text-md">
                Enter your credentials to access your
              </div>
              <div className="mb-10 text-slate-500 text-md">account</div>
              <div className="text-left mb-2.5">
                <div className="mb-1 text-sm font-semibold">Username</div>
                <input
                  type="text"
                  placeholder="JohnDoe@gmail.com"
                  className="w-full p-2 text-sm border rounded-md outline-none border-slate-300"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="text-left mb-2.5">
                <div className="mb-1 text-sm font-semibold">Password</div>
                <input
                  type="Password"
                  placeholder="password"
                  className="w-full p-2 text-sm border rounded-md outline-none border-slate-300"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="w-full p-2 mt-10 mb-3 text-sm text-white bg-gray-900 rounded-md"
                onClick={login}
              >
                Sign In
              </button>
              <div className="text-sm">
                Don't have an account?{" "}
                <a href="/signup" className="underline">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signin;
