import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsSection from "../../components/AppsSection/AppsSection";
import searchImg from "../../assets/search.svg";
import AppNotFound from "../../components/AppNotFound/AppNotFound";

const ShowAllApps = () => {
  const allApps = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase()),
  );

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
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <AppsSection key={app.id} app={app} />)
        ) : (
          <AppNotFound></AppNotFound>
        )}
      </div>
    </div>
  );
};

export default ShowAllApps;
