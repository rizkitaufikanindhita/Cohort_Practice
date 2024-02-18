import { useRecoilValue } from "recoil";
import atoms from "../store/atoms/Atom";
import { Fragment } from "react";

const EvenNum = () => {
  const { countAtom } = atoms;
  const count = useRecoilValue(countAtom);
  return (
    <Fragment>{count % 2 == 0 ? <div>its even</div> : <div></div>}</Fragment>
  );
};

export default EvenNum;
