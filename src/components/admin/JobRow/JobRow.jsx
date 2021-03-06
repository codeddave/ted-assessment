import React from "react";
import RedDot from "../../../assets/icons/red-dot.svg";

const JobRow = () => {
  return (
    <section className="pl-6 pr-12 shadow-lg bg-white flex h-16 mb-3 w-4/5 mx-auto justify-between rounded-lg items-center text-gray-500">
      <div className="flex">
        <img src={RedDot} alt="" className="pr-4" />
        <p>Front end developer</p>
      </div>

      <p>12/7/21</p>
      <p>50</p>
      <p>Edit</p>
      <p>Delete</p>
    </section>
  );
};

export default JobRow;
