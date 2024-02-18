/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "./Button";

const Count = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <br />
      <Button setCount={setCount} count={count} />
    </div>
  );
};

export default Count;
