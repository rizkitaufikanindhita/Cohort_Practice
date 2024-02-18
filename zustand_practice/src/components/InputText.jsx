import store from "../store";
import { shallow } from "zustand/shallow";

const InputText = () => {
  const { useInputStore } = store;
  const [inputValue, setInputValue] = useInputStore(
    (state) => [state.inputValue, state.setInputValue],
    shallow
  );
  console.log("render input text");
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <div>{inputValue}</div>
    </div>
  );
};

export default InputText;
