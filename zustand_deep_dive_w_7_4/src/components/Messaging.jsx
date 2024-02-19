import { Fragment } from "react";
import useAppStore from "../store";

const Messaging = () => {
  const messagingCount = useAppStore((state) => state.messagingCount);
  return (
    <Fragment>
      <button style={{ margin: "5px" }}>
        Messaging ({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
    </Fragment>
  );
};
export default Messaging;
