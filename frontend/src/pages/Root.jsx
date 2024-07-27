import React from "react";
import { Outlet } from "react-router-dom";
import BrowserTabIcon from "../components/Header/BrowserTabIcon";
const Root = () => {
  return (
    <>
      <BrowserTabIcon />
      <Outlet />
    </>
  );
};

export default Root;
