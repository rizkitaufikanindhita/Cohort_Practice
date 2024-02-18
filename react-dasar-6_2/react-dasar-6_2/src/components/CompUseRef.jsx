import { Fragment, useRef } from "react";

const CompUseRef = () => {
  const refName = useRef(null);

  const handleRefName = () => {
    localStorage.setItem("username", refName.current.value);
  };

  return (
    <Fragment>
      <input type="text" placeholder="masukkan nama" ref={refName} />
      <button onClick={handleRefName}>submit</button>
    </Fragment>
  );
};

export default CompUseRef;
