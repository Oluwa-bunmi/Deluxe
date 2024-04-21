import React from "react";
import Sidenav from "../components/Sidenav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidenav />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
