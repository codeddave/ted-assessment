import classNames from "classnames";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import LocationIcon from "../../assets/icons/location.svg";
const JobCard = ({
  title,
  location,
  job,
  setSingleJob,
  handleJobActiveStatus,
  isFirst,

  isFirstItemActive,
}) => {
  const [isJobClicked, setIsJobClicked] = useState(false);
  const handleJobCardClick = () => {
    setSingleJob(job);
    handleJobActiveStatus(isFirst);
    setIsJobClicked(true);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsJobClicked(false)}>
      <article
        onClick={handleJobCardClick}
        className={classNames(
          " shadow-lg border p-4 mb-6 rounded-lg tracking-wider ",
          {
            "company-blue-bg":
              (isFirst && isFirstItemActive) || (isJobClicked && !isFirst),
            " bg-white text-gray-700 ": !isJobClicked && !isFirst,
            " bg-white text-black ": isFirst && !isFirstItemActive,
          }
        )}
      >
        <div className="flex justify-between">
          <p
            className={classNames("tracking-wider", {
              "company-blue-text": !isJobClicked,
            })}
          >
            {title}
          </p>
          <p className="">$2k-$3k</p>
        </div>
        <div className="flex pt-4">
          <img src={LocationIcon} alt="location" />

          <p className="pl-3 font-light">{location}</p>
        </div>
        <p className="text-sm pt-4">
          The ideal candidate should be comfortable with the following
          technology stacks: HTML, CSS, JavaScript & Vue.js and/or React.js and
          everything in between.
        </p>
        <div className="flex justify-end">
          <button className="py-2 px-4 border rounded-xl mt-3 mb-2 tracking-wider company-red-text bg-white">
            See more
          </button>
        </div>
      </article>
    </ClickAwayListener>
  );
};

export default JobCard;
