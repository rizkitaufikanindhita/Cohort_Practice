import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <Fragment>
      <button
        className="w-72 h-12 m-2 p-2 rounded-xl border border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white text-xl"
        onClick={logout}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default Logout;
