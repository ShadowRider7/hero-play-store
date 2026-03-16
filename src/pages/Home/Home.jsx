import React from "react";
import playStore from "../../assets/playstore.svg";
import appStore from "../../assets/appstore.svg";
import hero from "../../assets/hero.png";

const Home = () => {
  return (
    <div>
      <section className="mt-15 text-center">
        <div>
          <h1 className="text-5xl font-extrabold">
            We Build <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              Productive
            </span>{" "}
            Apps
          </h1>
        </div>
        <div className="my-5 text-[#627382]">
          <p>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex justify-center space-x-3 items-center mt-8">
          <div className="btn  w-40  rounded py-5">
            <img className="w-6" src={playStore} alt="" />
            <span className="font-bold">Google Play</span>
          </div>
          <div className="btn w-40 rounded p-2">
            <img className="w-6" src={appStore} alt="" />
            <span className="font-bold"> App Store </span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center mt-5">
          <img src={hero} alt="" />
        </div>
      </section>
      <section className=" pt-10 pb-5 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="text-4xl text-center text-white font-bold mt-3">
          Trusted by Millions, Built for You
        </div>
        <div className="flex flex-row gap-5 justify-center items-center mt-5">
          <div className="text-white px-10 py-5 flex flex-col justify-center items-center ">
            <p>Total Downloads</p>
            <h2 className="text-5xl font-extrabold my-2">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="text-white px-10 py-5 flex flex-col justify-center items-center ">
            <p>Total Reviews</p>
            <h2 className="text-5xl font-extrabold my-2">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="text-white px-10 py-5 flex flex-col justify-center items-center ">
            <p>Active Apps</p>
            <h2 className="text-5xl font-extrabold my-2">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
