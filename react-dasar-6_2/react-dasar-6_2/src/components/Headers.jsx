/* eslint-disable react/prop-types */
import { Fragment, memo, useState } from "react";

// memo lets you skip re-rendering a component when its props are unchanged.
// memo for component
const Header = memo(function Header({ title }) {
  const [getTitle, setTitle] = useState(title);
  const changeTitle = () => {
    setTitle(Math.random());
  };

  return (
    <Fragment>
      <button onClick={changeTitle}>update title</button>
      <h1>{getTitle}</h1>
    </Fragment>
  );
});

export default Header;
