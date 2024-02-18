import { useRecoilState } from "recoil";
import atoms from "../store/atoms/Atom";

const Input = () => {
  const { inputAtom } = atoms;
  // kalau input seperti ini saja
  const [input, setInputValue] = useRecoilState(inputAtom);
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <div>{input}</div>
    </div>
  );
};

export default Input;
