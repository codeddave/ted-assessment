import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
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
  const [singleJob, setSingleJob] = useState();
  const [isJobClicked, setIsJobClicked] = useState(false);
  const [isFirstItemActive, setIsFirstItemActive] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      setJobs(data);
      setSingleJob(data[0]);
    };
    getData();
  }, []);
  console.log(jobs);

  //if (!jobs || !singleJob) return <p>loading..</p>;
  const handleJobActiveStatus = (isFirstItem) => {
    if (isFirstItem) {
      setIsFirstItemActive(true);
    } else {
      setIsFirstItemActive(false);
    }
  };
  return (
    <div className="text-white">
      <Header />
      <section className="grid grid-cols-2 gap-x-6  w-4/5 mx-auto pt-20 relative">
        {jobs?.length && singleJob ? (
          <>
            <div>
              {jobs.length ? (
                jobs.map((job, index) => (
                  <JobCard
                    title={job.title}
                    location={job.location}
                    job={job}
                    isFirst={index === 0}
                    isJobClicked={isJobClicked}
                    setIsJobClicked={setIsJobClicked}
                    isFirstItemActive={isFirstItemActive}
                    handleJobActiveStatus={handleJobActiveStatus}
                    setSingleJob={setSingleJob}
                  />
                ))
              ) : (
                <Loader />
              )}
            </div>

            <div>
              <JobDetails
                showApplicationForm={onToggleClick}
                singleJob={singleJob}
              />
            </div>
          </>
        ) : (
          <div className="py-24">
            <Loader className="dead-center " type="TailSpin" color="#0f4a7b" />
          </div>
        )}

        {toggleOn ? <JobApplicationForm closeModal={handleClose} /> : null}
      </section>

      <Footer />
    </div>
  );
};

export default FindJobs;
