import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="company-blue-bg py-24 relati ">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between mx-auto w-4/5 bordr relat">
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
        <div className="flex justify-cent items-center flex-col">
          <p className="text-2xl">Social Media</p>
          <div className="pt-1.5 flex">
            <div className="relative mr-5">
              <div className="w-12 h-12 rounded-full flex items-center  bg-gray-100 opacity-25 relaive z-30   justify-center"></div>
              <img
                src={Instagram}
                alt="instagram"
                className="absolute  top-4 right-4 "
              />
            </div>
            <div className="relative mr-5">
              <div className="w-12 h-12 rounded-full flex items-center  bg-gray-100 opacity-25 relaive z-30   justify-center"></div>
              <img
                src={Facebook}
                alt="instagram"
                className="absolute top-3.5 right-5"
              />
            </div>
            <div className="relative ">
              <div className="w-12 h-12 rounded-full flex items-center  bg-gray-100 opacity-25 relaive z-30   justify-center"></div>
              <img
                src={Twitter}
                alt="instagram"
                className="absolute top-4 right-4"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
