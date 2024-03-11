import { Fragment } from "react";
import hooks from "../hooks";

const Signup = () => {
  const { useSignUp } = hooks;
  const { setFirstName, setLastName, setUsername, setPassword, signup } =
    useSignUp();

  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-600">
        <div className="flex items-center justify-center h-screen ">
          <div className="bg-gray-200 w-96 h-4/6 rounded-xl flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full h-full text-center px-7">
              <div className="mt-10 mb-3 text-4xl font-bold">Sign up</div>
              <div className="text-slate-500 text-md">
                Enter your information to create an
              </div>
              <div className="mb-10 text-slate-500 text-md">account</div>
              <div className="text-left mb-2.5">
                <div className="mb-1 text-sm font-semibold">First Name</div>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-2 text-sm border rounded-md outline-none border-slate-300"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="text-left mb-2.5">
                <div className="mb-1 text-sm font-semibold">Last Name</div>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-2 text-sm border rounded-md outline-none border-slate-300"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
                onClick={signup}
              >
                Sign up
              </button>
              <div className="text-sm">
                Already have an account?{" "}
                <a href="/signin" className="underline">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
