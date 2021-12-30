import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import JobDetails from "../../components/JobDetails/JobDetails";

const FindJobs = () => {
  return (
    <div className="text-white">
      <Header />
      <section className="grid grid-cols-2 gap-x-6  w-4/5 mx-auto pt-20">
        <div>
          {[0, 1, 2, 3].map((item) => (
            <JobCard />
          ))}
        </div>
        <div>
          <JobDetails />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindJobs;
