import { Fragment } from "react";

const Signin = () => {
  return (
    <Fragment>
      <div className="bg-gray-600 w-screen h-screen">
        <div className="flex justify-center items-center h-screen ">
          <div className="bg-gray-200 w-96 h-3/6 rounded-xl flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="text-center h-full w-full px-7">
              <div className="font-bold text-4xl mt-10 mb-3">Sign In</div>
              <div className="text-slate-500 text-md">
                Enter your credentials to access your
              </div>
              <div className="text-slate-500 text-md mb-10">account</div>
              <div className="text-left mb-2.5">
                <div className="font-semibold mb-1 text-sm">Username</div>
                <input
                  type="text"
                  placeholder="JohnDoe@gmail.com"
                  className="p-2 rounded-md text-sm w-full border border-slate-300 outline-none"
                />
              </div>
              <div className="text-left mb-2.5">
                <div className="font-semibold mb-1 text-sm">Password</div>
                <input
                  type="Password"
                  placeholder="password"
                  className="p-2 rounded-md text-sm w-full border border-slate-300 outline-none"
                />
              </div>
              <button className="p-2 rounded-md text-sm w-full bg-gray-900 text-white mt-10 mb-3">
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
