import React from "react";
import appImg from "../../assets/demo-app (1).webp";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
const InstalledApps = () => {
  return (
    <div className="text-center mt-10 mx-4 md:mx-10">
      <h2 className="text-4xl font-bold">Your Installed Apps</h2>
      <p className="mt-2 text-xl text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-380 mx-auto my-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">1 Apps Found</h2>
        <div className="flex items-center bg-white border border-gray-300 px-3 py-2">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Click ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-380 mt-5 mx-auto grid grid-cols-1 gap-5">
        <div className="flex flex-wrap justify-between items-center shadow-2xl bg-white p-3">
          <div className="flex flex-wrap space-x-3 ">
            <img
              className="md:h-20 md:w-20 w-40 h-40 rounded-xl"
              src={appImg}
              alt=""
            />
            <div>
              <h2 className="font-bold text-start text-xl mt-2">
                Forest: Focus for Productivity
              </h2>
              <div className="flex gap-4 mt-2">
                <div className="flex justify-center gap-2 text-[#00D390]">
                  <img className="h-6 w-5" src={iconDownload} alt="" />{" "}
                  <p className="font-bold">9M</p>
                </div>
                <div className="flex justify-center gap-2 text-[#FF8811]">
                  <img className="h-6 w-6" src={iconRating} alt="" />
                  <span className="font-bold">5</span>
                </div>
                <div>
                  <p className="font-semibold text-[#627382]">258 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary mt-2 ">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
