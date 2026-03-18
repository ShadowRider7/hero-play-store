import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../components/Utilities/AddToDB";
import InstalledAppsCard from "../../components/InstalledAppsCard/InstalledAppsCard";

const InstalledApps = () => {
  const data = useLoaderData();
  const [appsList, setAppsList] = useState([]);

  useEffect(() => {
    const installedAppsId = getStoredApps();
    const convertedInstalledAppsId = installedAppsId.map((id) => parseInt(id));
    const installedAppsData = data.filter((app) =>
      convertedInstalledAppsId.includes(app.id),
    );
    setAppsList(installedAppsData);
  }, []);

  return (
    <div className="text-center mt-10 mx-4 md:mx-10">
      <h2 className="text-4xl font-bold">Your Installed Apps</h2>
      <p className="mt-2 text-xl text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-7xl mx-auto my-2 flex justify-between items-center">
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
      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 gap-5">
        {appsList.map((app) => (
          <InstalledAppsCard key={app.id} app={app}></InstalledAppsCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
