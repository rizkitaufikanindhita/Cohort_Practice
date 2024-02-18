import store from "../store";
import { shallow } from "zustand/shallow";

const Button = () => {
  const { useAppStore } = store;
  const [increaseCount, decreaseCount] = useAppStore(
    (state) => [state.increaseCount, state.decreaseCount],
    shallow
  );

  console.log("render button");
  return (
    <div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
};

export default Button;
