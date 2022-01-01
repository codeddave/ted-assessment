import React from "react";
import LocationIcon from "../../assets/icons/location.svg";

const JobCard = ({ title }) => {
  return (
    <article className="company-blue-bg shadow-lg border p-4 mb-6 rounded-lg tracking-wider">
      <div className="flex justify-between">
        <p className="tracking-wider">{title}</p>
        <p className="">$2k-$3k</p>
      </div>
      <div className="flex pt-4">
        <img src={LocationIcon} alt="location" />

        <p className="pl-3 font-light">Ikeja, Lagos</p>
      </div>
      <p className="text-sm pt-4">
        The ideal candidate should be comfortable with the following technology
        stacks: HTML, CSS, JavaScript & Vue.js and/or React.js and everything in
        between.
      </p>
      <div className="flex justify-end">
        <button className="py-2 px-4 border rounded-xl mt-3 mb-2 tracking-wider company-red-text bg-white">
          See more
        </button>
      </div>
    </article>
  );
};

export default JobCard;
