import React from "react";
import LocationIcon from "../../assets/icons/location.svg";

const JobDetails = () => {
  return (
    <div className="border shadow-lg rounded-lg py-6 px-8 h-full bg-white text-gray-700">
      <p className="text-2xl tracking-widest company-blue-text">
        Front end developer
      </p>
      <div className="flex pt-4 items-center">
        <img src={LocationIcon} alt="location" className="" />

        <p className="pl-3">Ikeja, Lagos </p>
      </div>
      <button className="company-blue-bg px-8  font-extralight tracking-widest py-2.5 rounded-lg text-white mt-6">
        Apply Via Find Job
      </button>
    </div>
  );
};

export default JobDetails;
