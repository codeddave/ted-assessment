import React from "react";
import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="company-blue-bg py-24 ">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between mx-auto w-4/5 bordr">
        <div>
          <img src={Logo} alt="logo" />

          <p className="pt-4">
            &copy; 2021 <span>FindJobs</span>
          </p>
        </div>
        <div>
          <p className="text-xl">Quick Links</p>
          <ul className="pt-3">
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Terms and condition</li>
          </ul>
        </div>
        <div>
          <p className="text-xl">Quick Links</p>
          <ul className="pt-3">
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Terms and condition</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl">Social Media</p>
          <div className="pt-4"> Icons go here</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
