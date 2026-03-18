import React from "react";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";

const InstalledAppsCard = ({ app, handleRemove }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;

  return (
    <div className="flex flex-wrap justify-between items-center shadow-2xl bg-white p-3">
      <div className="flex flex-wrap space-x-3 ">
        <img
          className="md:h-20 md:w-20 w-40 h-40 rounded-xl"
          src={image}
          alt=""
        />
        <div>
          <h2 className="font-bold text-start text-xl mt-2">{title}</h2>
          <div className="flex gap-4 mt-2">
            <div className="flex justify-center gap-2 text-[#00D390]">
              <img className="h-6 w-5" src={iconDownload} alt="" />{" "}
              <p className="font-bold">
                <p className="font-bold">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </p>
              </p>
            </div>
            <div className="flex justify-center gap-2 text-[#FF8811]">
              <img className="h-6 w-6" src={iconRating} alt="" />
              <span className="font-bold">{ratingAvg}</span>
            </div>
            <div>
              <p className="font-semibold text-[#627382]">{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(id)}
          className="btn btn-primary mt-2 "
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
