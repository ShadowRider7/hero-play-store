import React from "react";
import { useLoaderData } from "react-router";
import AppsSection from "../../components/AppsSection/AppsSection";
import searchImg from "../../assets/search.svg";

const ShowAllApps = () => {
  const allApps = useLoaderData();

  return (
    <div className="text-center mt-10 mx-4 md:mx-10">
      <h2 className="text-4xl font-bold">Our All Applications</h2>
      <p className="mt-2 text-xl text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="my-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          ({allApps.length}) Apps Found
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
            className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allApps.map((app) => (
          <AppsSection key={app.id} app={app}></AppsSection>
        ))}
      </div>
    </div>
  );
};

export default ShowAllApps;
