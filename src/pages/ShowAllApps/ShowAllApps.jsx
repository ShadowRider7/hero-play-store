import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsSection from "../../components/AppsSection/AppsSection";
import searchImg from "../../assets/search.svg";
import AppNotFound from "../../components/AppNotFound/AppNotFound";
import { InfinitySpin } from "react-loader-spinner";

const ShowAllApps = () => {
  const allApps = useLoaderData();

  const [filteredApps, setFilteredApps] = useState(allApps);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;

    setLoading(true);

    setTimeout(() => {
      const result = allApps.filter((app) =>
        app.title.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredApps(result);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="text-center mt-10 mx-4 md:mx-10">
      <h2 className="text-4xl font-bold">Our All Applications</h2>
      <p className="mt-2 text-xl text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="max-w-7xl mx-auto my-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h2>
        <div className="flex items-center bg-white border border-gray-300 px-3 py-2">
          <img
            src={searchImg}
            alt="Search"
            className="w-4 h-4 mr-2 opacity-60"
          />

          <input
            type="text"
            name="appSearch"
            placeholder="search Apps"
            onChange={handleSearch}
            className="outline-none"
          />
        </div>
      </div>

      {loading ? (
        <div className=" inset-0 flex items-center justify-center">
          <InfinitySpin width="200" color="#632EE3" />
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredApps.map((app) => (
            <AppsSection key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <AppNotFound></AppNotFound>
      )}
    </div>
  );
};

export default ShowAllApps;
