import React from "react";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
import { Link } from "react-router";
const AppsSection = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className=" shadow-sm border rounded-2xl border-base-300">
        <figure className="p-5 m-3 bg-base-300">
          <img className="w-50 mx-auto h-40" src={image} alt="app" />
        </figure>
        <div className="my-4 ms-3">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flex justify-between mx-3 my-4">
          <div className="px-2 py-1 rounded-md flex items-center space-x-2 text-[#00D390] bg-[#F1F5E8]">
            <img className="w-5" src={iconDownload} alt="" />
            <span className="text-xl font-semibold ">
              {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                downloads,
              )}
            </span>
          </div>
          <div className="px-2 py-1 rounded-md flex items-center space-x-2 text-[#FF8811] bg-[#FFF0E1]">
            <img className="w-5" src={iconRating} alt="" />
            <span className="text-xl font-semibold ">{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsSection;
