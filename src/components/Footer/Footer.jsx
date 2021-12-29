import React from "react";
import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="company-blue-bg py-24">
      <section className="grid grid-cols-4 justify-between">
        <div>
          <img src={Logo} alt="logo" />

          <p className="pt-4">
            {" "}
            &copy; 2021 <span>FindJobs</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
