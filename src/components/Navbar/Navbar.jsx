import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div className="">
          <Link>Find Jobs</Link>
        </div>

        <ul className="flex ">
          <li>Jobs</li>
          <li>Company Review</li>
          <li>Find Salaries</li>
          <li>
            <button>Post Job</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
