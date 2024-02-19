import { Fragment } from "react";
import useAppStore from "../store";

const Notifications = () => {
  const notificationCount = useAppStore((state) => state.notificationCount);
  return (
    <Fragment>
      <button style={{ margin: "5px" }}>
        Notifications ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>
    </Fragment>
  );
};
export default Notifications;
