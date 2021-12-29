import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "../../assets/icons/search.svg";
import LocationIcon from "../../assets/icons/location.svg";

import "./Header.css";
//import {Navbar} from "../../components"
const Header = () => {
  return (
    <>
      <div className="0 text-white h-56 header-bg">
        <section className="w-5/6 mx-auto">
          <Navbar />
          <section className="pt-20">
            <p className="text-4xl tracking-widest pl-8">Find Your Dream Job</p>
          </section>
        </section>
      </div>

      <section className="w-4/5 mx-auto -m-6 bg-white h-16 border rounded px-6  shadow-lg">
        <div className="shaunded grid grid-cols-2 divide-x divide-cyan-500 my-2.5 ">
          <div className="py-2 flex items-center">
            <img src={SearchIcon} alt="" className="pr-4" />
            <input
              className="focus:outline-none text-black "
              type="text"
              placeholder="Front end developer"
            />
          </div>
          <div className="pl-6 py-2 flex items-center">
            <img src={LocationIcon} alt="" className="pr-4" />
            <input
              className="outline-none text-black w-full"
              type="text"
              placeholder="Lagos, Nigeria"
            />

            <button className="company-red-bg px-4 font-extralight tracking-widest py-1 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
