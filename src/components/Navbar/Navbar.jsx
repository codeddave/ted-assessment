import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <div className="pt-6">
      <nav className="flex justify-between text-white ">
        <div className="">
          <Link>
            {" "}
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="flex  ">
          <li className="pr-8">Jobs</li>
          <li className="pr-8">Company Review</li>
          <li className="pr-8">Find Salaries</li>
          <li className="">
            <button className="company-blue-text px-4 bg-white py-1  rounded font-bold">
              Post Job
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
