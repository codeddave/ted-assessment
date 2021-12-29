import React from "react";
import Navbar from "../Navbar/Navbar";
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

      <section className="w-10/12 mx-auto -m-6 bg-white h-12 border rounded px-4 py-2 shadow-lg">
        <div className="shaunded grid grid-cols-2 divide-x divide-cyan-500">
          <div>
            <input
              className="focus:outline-none text-black"
              type="text"
              placeholder="Front end developer"
            />
          </div>
          <div className="pl-6">
            <input
              className="outline-none text-black"
              type="text"
              placeholder="Lagos, Nigeria"
            />

            <button className="company-red">Search</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;