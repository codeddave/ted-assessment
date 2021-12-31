import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen flex">
      <section className="company-blue-bg ">
        <div className="">
          <Link>
            {" "}
            <img src={Logo} alt="logo" />
          </Link>
          <p className="pl-4 italic font-light">for employers</p>
        </div>

        <h1 className="pt-40">
          Find the best candidates for your organisation.
        </h1>
      </section>
      <section></section>
    </section>
  );
};

export default Login;
