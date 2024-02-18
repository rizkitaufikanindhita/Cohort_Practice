/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

const Signout = () => {
  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Fragment>
      <div>
        <button onClick={signout}>Sign Out</button>
      </div>
    </Fragment>
  );
};

export default Signout;
