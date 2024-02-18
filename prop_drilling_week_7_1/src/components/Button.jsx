/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = ({ setCount, count }) => {
  return (
    <div>
      <button style={{ margin: "10px" }} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ margin: "10px" }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Button;
