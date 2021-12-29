import React from "react";
import LocationIcon from "../../assets/icons/location.svg";

const JobDetails = () => {
  return (
    <section className="border shadow-lg rounded-lg h-full bg-white text-gray-700">
      <div className=" py-6 px-8 ">
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

      <section className="border-t company-red-border text-gray-700">
        <section className="pt-6 px-8 text-sm">
          <p>
            In this role, you will be responsible for developing and
            implementing user interface components using React.js concepts and
            workflow such as Redux, Flux, and Webpack. You will also be
            responsible for profiling and improving front-end performance and
            documenting our front-end codebase.
          </p>
          <ul className="list-disc">
            <li>Minimum Qualification: Degree</li>
            <li>Experience Level: Senior Level</li>
            <li>Experience Length: 5 years</li>
          </ul>
          <section>
            <p>Job Description/ Requirements</p>
            <ul className="list-disc">
              <li>
                5+ years experience of front-end related (HTML5 + JS + CSS3)
                development work experience, familiar with mobile application
                development;
              </li>
              <li>
                Proficient in JavaScript / Typescript, mastering technologies
                such as HTML, CSS, DOM, AJAX, etc., can quickly complete the
                established interactive design functions; At least 4 years
                experience is required.
              </li>
              <li>
                Thorough understanding of React.js and its core principles
              </li>
              <li>
                Experience with popular React.js workflows (such as Flux or
                Redux)
              </li>
              <li>
                Experience with popular React.js workflows (such as Flux or
                Redux)
              </li>
              <li>Knowledge of isomorphic react is a plus</li>
              <li>
                Familiarity with mordern front-end build pipelines and tools
              </li>
              <li>
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
