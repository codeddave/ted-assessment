import React from "react";
import LocationIcon from "../../assets/icons/location.svg";

const JobCard = () => {
  return (
    <article className="company-blue-bg shadow-lg border p-4 mb-6 rounded-lg">
      <div className="flex justify-between">
        <p className="tracking-wider">Front end developer</p>
        <p>$2k-$3k</p>
      </div>
      <div className="flex pt-4">
        <img src={LocationIcon} alt="location" />

        <p className="pl-3">Ikeja, Lagos</p>
      </div>
      <p className="text-sm pt-4">
        We seek an experienced Javascript web application developer who is
        proficient with React.js and has excellent communication skills.
      </p>
    </article>
  );
};

export default JobCard;
