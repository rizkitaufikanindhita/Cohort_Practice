import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import atoms from "../store/atoms/Atom";

const CountRendered = () => {
  const { countAtom } = atoms;
  const count = useRecoilValue(countAtom);
  return <Fragment>{count}</Fragment>;
};

export default CountRendered;
