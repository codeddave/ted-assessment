import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useToggle from "../../components/hooks/useToggle";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";
import JobCard from "../../components/JobCard/JobCard";
import JobDetails from "../../components/JobDetails/JobDetails";
const FindJobs = () => {
  const { toggleOn, onToggleClick } = useToggle();

  return (
    <div className="text-white">
      <Header />
      <section className="grid grid-cols-2 gap-x-6  w-4/5 mx-auto pt-20 relative">
        <div>
          {[0, 1, 2, 3].map((item) => (
            <JobCard />
          ))}
        </div>

        <div>
          <JobDetails showApplicationForm={onToggleClick} />
        </div>
        {toggleOn ? <JobApplicationForm /> : null}
      </section>

      <Footer />
    </div>
  );
};

export default FindJobs;
