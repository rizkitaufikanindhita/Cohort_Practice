import { Fragment } from "react";
import useAppStore from "../store";

const Me = () => {
  const meCount = useAppStore((state) => state.meCount());

  return (
    <Fragment>
      <button style={{ margin: "5px" }}>
        Me ({meCount >= 100 ? "99+" : meCount})
      </button>
    </Fragment>
  );
};

export default Me;

// state.increaseMessageCount tanpa () karena ingin memanggil fungsinya
// state.meCount() dengan menggunakan () karena ingin mendapatkan nilainya dari fungsinya
