import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getStoredApps,
  removeFromDB,
} from "../../components/Utilities/AddToDB";
import InstalledAppsCard from "../../components/InstalledAppsCard/InstalledAppsCard";
import Swal from "sweetalert2";
import { ChevronDown } from "lucide-react";

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
  }, [data]);

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

  const handleRemove = (id) => {
    removeFromDB(id);
    setAppsList((appsList) => {
      const newList = appsList.filter((app) => app.id !== id);
      return newList;
    });
    Toast.fire({
      icon: "success",
      title: "Uninstalled successfully",
    });
  };
  const handleSort = (type) => {
    const sortedApps = [...appsList].sort((a, b) => {
      if (type === "asc") {
        return a.downloads - b.downloads;
      } else {
        return b.downloads - a.downloads;
      }
    });

    setAppsList(sortedApps);
  };

  return (
    <div className="text-center mt-10 mx-4 md:mx-10">
      <h2 className="text-4xl font-bold">Your Installed Apps</h2>
      <p className="mt-2 text-xl text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-7xl mx-auto my-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{appsList.length} Apps Found</h2>
        <div className="">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Short by Size <ChevronDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("asc")}>Ascending</a>
              </li>
              <li>
                <a onClick={() => handleSort("desc")}>Descending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 gap-5">
        {appsList.map((app) => (
          <InstalledAppsCard
            handleRemove={handleRemove}
            key={app.id}
            app={app}
          ></InstalledAppsCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
