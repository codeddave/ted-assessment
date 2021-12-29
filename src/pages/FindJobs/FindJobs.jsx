import React from "react";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";

const FindJobs = () => {
  return (
    <div className="text-white">
      <Header />
      <section className="grid grid-cols-2 w-4/5 mx-auto pt-">
        <div>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <JobCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindJobs;
