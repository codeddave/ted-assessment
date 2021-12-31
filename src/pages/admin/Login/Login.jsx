import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import Hero from "../../../assets/images/hero.svg";

import { Link } from "react-router-dom";
import "./Login.css";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <section className="h-screen grid grid-cols-2">
      <div className="flex border-black  justify-start w-full red  pr-10 bent-bg">
        <section className="company-blue-bg bent-bg w-full borr ">
          <div className="pl-14 lg:pl-20 pt-8">
            <Link>
              {" "}
              <img src={Logo} alt="logo" />
            </Link>
            <p className="pl-4 italic font-light text-white">for employers</p>
          </div>

          <h1 className="pt-40 font-extrabold text-3xl lg:text-5xl max-w-lg pl-14 lg:pl-20 text-white tec">
            Find the best candidates for your organisation.
          </h1>

          <img src={Hero} alt="" className="pl-12 mt-3 pr-4" />
        </section>
      </div>

      <section className="relative flex justify-center">
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
