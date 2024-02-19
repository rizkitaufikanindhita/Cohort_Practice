import { Fragment } from "react";
import useAppStore from "../store";

const Jobs = () => {
  const jobsCount = useAppStore((state) => state.jobsCount);
  return (
    <Fragment>
      <button style={{ margin: "5px" }}>
        Jobs ({jobsCount >= 100 ? "99+" : jobsCount})
      </button>
    </Fragment>
  );
};
export default Jobs;
