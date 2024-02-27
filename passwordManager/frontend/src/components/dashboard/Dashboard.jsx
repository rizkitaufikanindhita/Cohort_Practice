import { Fragment } from "react";
import Add from "./dashboardChild/Add";
import Button from "./dashboardChild/Button";
import Show from "./dashboardChild/Show";
import Logout from "./dashboardChild/Logout";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="bg-slate-700 w-full h-screen flex justify-center items-center">
        <div className="grid col-span-1">
          <Add />
          <Button />
          <Logout />
        </div>
        <Show />
      </div>
    </Fragment>
  );
};

export default Dashboard;
