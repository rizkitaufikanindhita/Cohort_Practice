import { Fragment } from "react";
import { useSetRecoilState } from "recoil";
import atoms from "../store/atoms/Atom";

const Button = () => {
  const { countAtom } = atoms;
  // const [count, setCount] = useRecoilState(countAtom) sebelum menggunakan useSetRecoilState
  const setCount = useSetRecoilState(countAtom);
  return (
    <Fragment>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </Fragment>
  );
};

export default Button;
