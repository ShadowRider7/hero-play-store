import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import iconDwn from "../../assets/icon-downloads.png";
import iconRat from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";

import RatinhChart from "../../components/RatingChart/RatinhChart";
import {
  addToStoreDB,
  getStoredApps,
} from "../../components/Utilities/AddToDB";
import Swal from "sweetalert2";

const AppDetailsBig = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  const {
    ratings,
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    reviews,
    size,
    title,
  } = singleApp;

  const [installedApps, setInstalledApps] = useState(() => getStoredApps());

  const isInstalled = installedApps.includes(appId);

  const handleInstalledApps = (id) => {
    addToStoreDB(id);
    setInstalledApps(getStoredApps());
    Toast.fire({
      icon: "success",
      title: `${title} has been installed!`,
    });
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex flex-wrap gap-5 mt-15">
        <div>
          <img
            className="w-80 h-80 p-5 rounded shadow-2xl "
            src={image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="text-xl font-sans text-[#627382] mt-2">
              Developed by{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                {companyName}
              </span>
            </p>
          </div>
          <div className="border opacity-20 my-7 w-full"></div>
          <div className="flex gap-10">
            <div className="space-y-1">
              <img src={iconDwn} alt="" /> <p>Downloads</p>{" "}
              <span className="font-bold text-4xl">{downloads}</span>
            </div>
            <div className="space-y-1">
              <img src={iconRat} alt="" /> <p>Average Ratings</p>
              <span className="font-bold text-4xl">{ratingAvg}</span>
            </div>
            <div className="space-y-1">
              <img src={iconReview} alt="" /> <p>Total Reviews</p>
              <span className="font-bold text-4xl">{reviews}</span>
            </div>
          </div>
          <div className="mt-7">
            <button
              disabled={isInstalled}
              onClick={() => handleInstalledApps(appId)}
              className="btn text-white bg-[#00D390]"
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </section>
      <div className="border opacity-20 my-7 w-full"></div>
      <section>
        <h2 className="text-2xl font-semibold">Ratings</h2>
        <RatinhChart data={ratings}></RatinhChart>
      </section>
      <div className="border opacity-20 my-7 w-full"></div>
      <section>
        <h2 className="text-2xl font-semibold">Description</h2>

        {description.map((para, index) => (
          <p key={index} className="mt-4 text-[#627382] leading-relaxed">
            {para}
          </p>
        ))}
      </section>
    </div>
  );
};

export default AppDetailsBig;
