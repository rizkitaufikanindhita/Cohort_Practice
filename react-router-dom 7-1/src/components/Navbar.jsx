/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dashboardButton = () => {
    navigate("/dashboard");
  };
  return (
    <Fragment>
      <button style={{ margin: "10px" }} onClick={() => navigate("/")}>
        Landing
      </button>
      <button style={{ margin: "10px" }} onClick={dashboardButton}>
        Dashboard
      </button>
    </Fragment>
  );
};

export default Navbar;
