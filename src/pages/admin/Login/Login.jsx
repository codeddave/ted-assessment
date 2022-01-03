import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import Hero from "../../../assets/images/hero.svg";

import { Link } from "react-router-dom";
import "./Login.css";
import LoginForm from "./LoginForm";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
const Login = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div
        className={classNames(
          "md:flex border-black  justify-start  md:pr-10 ",
          {
            "red ": !isMobile,
            "bent-bg": !isMobile,
          }
        )}
      >
        <section
          className={classNames("w-full company-blue-bg ", {
            "bent-bg": !isMobile,
            "": !isMobile,
          })}
        >
          <div className="pl-14 lg:pl-20 pt-8">
            <Link>
              {" "}
              <img src={Logo} alt="logo" />
            </Link>
            <p className="pl-4 italic font-light text-white">for employers</p>
          </div>

          <h1 className=" pt-8 px-2 md:px-0 md:pt-40 pr-4 font-extrabold text-3xl lg:text-5xl md:max-w-lg  md:pl-14 lg:pl-20 text-white  text-center md:text-left pb-8 md:pb-0">
            Find the best candidates for your organisation.
          </h1>

          <img src={Hero} alt="" className="pl-12 mt-3  hidden md:block pr-4" />
        </section>
      </div>

      <section className="relative fle">
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
