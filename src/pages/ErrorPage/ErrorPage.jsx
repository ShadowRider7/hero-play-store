import React from "react";
import errorIcon from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="max-w-380 mx-auto my-20">
      <div className="flex flex-col items-center">
        <img className="" src={errorIcon} alt="" />
        <div>
          <h2 className="mt-10 font-bold text-4xl">Oops, page not found!</h2>
          <p className="mt-4 text-center  text-[#627382]">
            The page you are looking for is not available.
          </p>
        </div>
        <div>
          <Link to={"/"}>
            <button className="btn rounded  text-white mt-5 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
