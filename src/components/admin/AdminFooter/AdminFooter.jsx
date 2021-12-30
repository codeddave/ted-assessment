import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Twitter from "../../../assets/icons/twitter.svg";
const AdminFooter = () => {
  return (
    <footer className="company-blue-bg py-9 relati ">
      <section className="mx-auto w-4/5 bordr relat flex justify-between">
        <div className="flex  items-center">
          <img src={Logo} alt="logo" className="w-20" />

          <p className="pl-8 text-white tracking-wide ">
            &copy; 2021 <span className="text-cyan-500 italic">FindJobs</span>
          </p>
          <p className="pl-8 text-white">Terms and conditions</p>
        </div>

        <div className="md:flex justify-cent items-center flex-col ">
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

export default AdminFooter;
