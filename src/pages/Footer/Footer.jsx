import React from "react";
import heroIcon from "./../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-black mt-5">
      <div className="max-w-7xl mx-auto">
        <footer className="flex flex-col md:flex-row  text-white py-5 ">
          <div className="flex-1 mx-5 mb-3">
            <div className="flex space-x-2 mb-2">
              <img className="w-8" src={heroIcon} alt="" />
              <h2 className="text-2xl">HERO.IO Play Store</h2>
            </div>

            <p className="text-sm text-gray-300">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className=" flex-4 ml-5 space-x-3 grid grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Company</h6>
              <a className="link link-hover text-gray-400">About Us</a>
              <a className="link link-hover text-gray-400">Our Mission</a>
              <a className="link link-hover text-gray-400">Contact</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Services</h6>
              <a className="link link-hover text-gray-400">Product & Service</a>
              <a className="link link-hover text-gray-400">Customer Stories</a>
              <a className="link link-hover text-gray-400">Download Apps</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Information</h6>
              <a className="link link-hover text-gray-400">Privacy Policy</a>
              <a className="link link-hover text-gray-400">
                Terms & Conditions
              </a>
              <a className="link link-hover text-gray-400">Join Us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Social Links</h6>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/xKCWDbLz/Group.jpg"
                  alt=""
                />
                @HERO.IO Play Store
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/sv728FsJ/fi-145807.png"
                  alt=""
                />
                @HERO.IO Play Store
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/chLtfM4D/fi-5968764.png"
                  alt=""
                />
                @HERO.IO Play Store
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/wZqDTQv2/Vectormail.png"
                  alt=""
                />{" "}
                support@hero.com
              </a>
            </div>
          </div>
        </footer>
        <hr className="border-t border-gray-500 " />

        <footer className="footer sm:footer-horizontal footer-center text-white p-4 ">
          <aside>
            <p>
              © {new Date().getFullYear()} HERO.IO Play Store. All rights
              reserved.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
