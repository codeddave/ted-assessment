import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/logo.svg";
import TedbreeLogo from "../../../assets/icons/tedbree.svg";
import NotificationBell from "../../../assets/icons/notification.svg";

const AdminNavbar = () => {
  return (
    <div className="pt-6">
      <nav className="flex justify-between text-white ">
        <div className="">
          <Link>
            {" "}
            <img src={Logo} alt="logo" />
          </Link>
          <p>for employers</p>
        </div>

        <ul className="flex  ">
          <li className="pr-8">
            <img src={NotificationBell} alt="notification" />
          </li>
          <li className="">
            <img src={TedbreeLogo} alt="tedbree-logo" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
