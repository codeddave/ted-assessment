import React from "react";
import LocationIcon from "../../assets/icons/location.svg";

const JobDetails = ({ showApplicationForm }) => {
  return (
    <section className="border shadow-lg rounded-lg h-full bg-white text-gray-700 tracking-widest">
      <div className=" py-6 px-8 ">
        <p className="text-2xl  company-blue-text">Front end developer</p>
        <div className="flex pt-4 items-center">
          <img src={LocationIcon} alt="location" className="" />

          <p className="pl-3">Ikeja, Lagos </p>
        </div>
        <button
          onClick={showApplicationForm}
          className="company-blue-bg px-8  font-extralight tracking-widest py-2.5 rounded-lg text-white mt-6"
        >
          Apply Via Find Job
        </button>
      </div>

      <section className="border-t company-red-border text-gray-700">
        <section className="pt-6 px-8 text-sm">
          <p>
            In this role, you will be responsible for developing and
            implementing user interface components using React.js concepts and
            workflow such as Redux, Flux, and Webpack. You will also be
            responsible for profiling and improving front-end performance and
            documenting our front-end codebase.
          </p>
          <ul className="list-disc pt-6 pl-6">
            <li>Minimum Qualification: Degree</li>
            <li>Experience Level: Senior Level</li>
            <li>Experience Length: 5 years</li>
          </ul>
          <section className="pt-7">
            <p>Job Description/ Requirements</p>
            <ul className="list-disc pt-7 pl-6">
              <li className="mb-6">
                5+ years experience of front-end related (HTML5 + JS + CSS3)
                development work experience, familiar with mobile application
                development;
              </li>
              <li className="mb-6">
                Proficient in JavaScript / Typescript, mastering technologies
                such as HTML, CSS, DOM, AJAX, etc., can quickly complete the
                established interactive design functions; At least 4 years
                experience is required.
              </li>
              <li className="mb-6">
                Thorough understanding of React.js and its core principles
              </li>
              <li className="mb-6">
                Experience with popular React.js workflows (such as Flux or
                Redux)
              </li>
              <li className="mb-6">
                Experience with popular React.js workflows (such as Flux or
                Redux)
              </li>
              <li className="mb-6">Knowledge of isomorphic react is a plus</li>
              <li className="mb-6">
                Familiarity with mordern front-end build pipelines and tools
              </li>
              <li className="mb-6">
                Experience with common front-end development tools such as
                Babel, Webpack, NPM e.t.c
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default JobDetails;
