import React, { useEffect, useState } from "react";
import { getJobs } from "../../api/guest";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useToggle from "../../components/hooks/useToggle";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";
import JobCard from "../../components/JobCard/JobCard";
import JobDetails from "../../components/JobDetails/JobDetails";
const FindJobs = () => {
  const { toggleOn, onToggleClick, handleClose } = useToggle();
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    getData();
  }, []);
  console.log(jobs);
  return (
    <div className="text-white">
      <Header />
      <section className="grid grid-cols-2 gap-x-6  w-4/5 mx-auto pt-20 relative">
        <div>
          {jobs ? jobs.map((job) => <JobCard title={job.title} />) : null}
        </div>

        <div>
          <JobDetails showApplicationForm={onToggleClick} />
        </div>
        {toggleOn ? <JobApplicationForm closeModal={handleClose} /> : null}
      </section>

      <Footer />
    </div>
  );
};

export default FindJobs;
