import React from "react";
import appNotFound from "./../../assets/App-Error.png";
import { Link } from "react-router";
const AppNotFound = () => {
  return (
    <div className="col-span-full flex flex-col items-center">
      <img className="w-[419.62px] " src={appNotFound} alt="" />
      <h2 className="mt-5 font-bold text-5xl">OPPS!! APP NOT FOUND</h2>
      <p className="my-3 text-2xl text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to={"/"}>
        <button className="btn btn-lg rounded-xl  text-white mt-5 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default AppNotFound;
