import { Fragment } from "react";
import Button from "./Button";
import CountRendered from "./CountRendered";
import EvenNum from "./EvenNum";

const Count = () => {
  // kalau tanpa recoil hanya menggunakan context api maka akan ter re render component ini
  // kalau pakai recoil component ini tidak ter re render
  return (
    <Fragment>
      <CountRendered />
      <br />
      <EvenNum />
      <br />
      <Button />
    </Fragment>
  );
};

export default Count;
