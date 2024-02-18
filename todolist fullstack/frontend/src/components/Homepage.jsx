import { Fragment } from "react";

/* eslint-disable react/prop-types */
const Homepage = ({ title }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <span style={{ margin: 10 }}>
        <a href="/signup">Sign up</a>
      </span>
      <span style={{ margin: 10 }}>
        <a href="/signin">Sign in</a>
      </span>
    </Fragment>
  );
};

export default Homepage;
