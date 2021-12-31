import React from "react";
import SearchIcon from "../../../assets/icons/search.svg";
import EllipseOne from "../../../assets/images/ellipse1.svg";
import EllipseTwo from "../../../assets/images/ellipse2.svg";
import EllipseThree from "../../../assets/images/ellipse3.svg";
import PlusIcon from "../../../assets/icons/plus.svg";

import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminHeader = ({ showJobCreationForm }) => {
  return (
    <>
      <div className=" text-white h-72 header-bg relative">
        <section className="w-5/6 mx-auto ">
          <AdminNavbar />{" "}
          <section className="absolute right-0">
            <img
              src={EllipseOne}
              alt=""
              className=""
              //style={{ width: "50px", height: "50px" }}
            />
            <img
              src={EllipseTwo}
              alt=""
              className="-ml-8 pt-2"
              //style={{ width: "50px", height: "50px" }}
            />
            <img
              src={EllipseThree}
              alt=""
              className="-ml-24 pt-2"
              //style={{ width: "50px", height: "50px" }}
            />
          </section>
          <section className="pt-20 ">
            <p className="text-4xl italic pl-8 tracking-normal">Jobs</p>
          </section>
        </section>
      </div>
      <section className="w-4/5 mx-auto mt-4 border-black flex flex-grow flex-col">
        <div className="flex justify-between items-baseline text-white">
          <section className="w-2/5 flex items-center mt-24   relative bg-white h-16 border rounded-lg pl-6 pr-3  shadow-lg">
            <div className="my-2.5 w-full flex items-center justify-between ">
              <div className="py-2 flex items-center  ">
                <img src={SearchIcon} alt="" className="pr-4" />
                <input
                  className="focus:outline-none text-black w-fll "
                  type="text"
                  placeholder="Front end developer"
                />
              </div>

              <button className="company-red-bg px-4 font-extralight tracking-widest py-1 rounded-lg">
                Search
              </button>
            </div>
          </section>
          <button
            onClick={showJobCreationForm}
            className="company-red-bg px-4 h-10 font-extralight tracking-widest py-1 rounded-lg"
          >
            <img src={PlusIcon} alt="" className="inline pr-2" />
            New Job
          </button>
        </div>
      </section>
    </>
  );
};

export default AdminHeader;
