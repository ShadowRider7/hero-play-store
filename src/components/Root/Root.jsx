import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../pages/Header/Navbar";
import Footer from "../../pages/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-380 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
