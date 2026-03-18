import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../pages/Header/Navbar";
import Footer from "../../pages/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
