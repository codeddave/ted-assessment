import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "../../assets/icons/search.svg";
import LocationIcon from "../../assets/icons/location.svg";
import EllipseOne from "../../assets/images/ellipse1.svg";
import EllipseTwo from "../../assets/images/ellipse2.svg";
import EllipseThree from "../../assets/images/ellipse3.svg";

import "./Header.css";
//import {Navbar} from "../../components"
const Header = () => {
  return (
    <>
      <div className="0 text-white h-72 header-bg relative">
        <section className="w-5/6 mx-auto ">
          <Navbar />{" "}
          <section className="absolute right-0">
            <img
              src={EllipseOne}
              alt=""
              className=""
              //style={{ width: "50px", height: "50px" }}
            />
            <img
              src={EllipseTwo}
              alt=""
              className="-ml-8 pt-2"
              //style={{ width: "50px", height: "50px" }}
            />
            <img
              src={EllipseThree}
              alt=""
              className="-ml-24 pt-2"
              //style={{ width: "50px", height: "50px" }}
            />
          </section>
          <section className="pt-20 ">
            <p className="text-4xl tracking-widest pl-8">Find Your Dream Job</p>
          </section>
        </section>
      </div>

      <section className="w-4/5 mx-auto -mt-6 z-20 relative bg-white h-16 border rounded px-6  shadow-lg">
        <div className="shaunded grid grid-cols-2 divide-x divide-cyan-500 my-2.5 ">
          <div className="py-2 flex items-center">
            <img src={SearchIcon} alt="" className="pr-4" />
            <input
              className="focus:outline-none text-black w-full "
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
