import React from "react";
import Sidenav from "../components/Sidenav";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen overflow-hidden">
      <Sidenav />
      <div className="w-full h-full">
        <Header />
        <div className="h-[calc(100%-116px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
