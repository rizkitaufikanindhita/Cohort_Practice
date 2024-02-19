import { Fragment } from "react";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";

const Me = () => {
  const [increaseMessageCount, meCount] = useAppStore(
    (state) => [state.increaseMessageCount, state.meCount()],
    shallow
  );

  return (
    <Fragment>
      <button onClick={increaseMessageCount} style={{ margin: "5px" }}>
        Me ({meCount >= 100 ? "99+" : meCount})
      </button>
    </Fragment>
  );
};

export default Me;

// state.increaseMessageCount tanpa () karena ingin memanggil fungsinya
// state.meCount() dengan menggunakan () karena ingin mendapatkan nilainya dari fungsinya
