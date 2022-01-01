import React from "react";
import AdminFooter from "../../../components/admin/AdminFooter/AdminFooter";
import AdminHeader from "../../../components/admin/AdminHeader/AdminHeader";
import JobCreationForm from "../../../components/admin/JobCreationForm/JobCreationForm";
import JobRow from "../../../components/admin/JobRow/JobRow";
import useToggle from "../../../components/hooks/useToggle";
const AdminFindJobs = () => {
  const { toggleOn, onToggleClick, handleClose } = useToggle();
  return (
    <div className="flex flex-col h-full overflow-hidden min-h-screen">
      <AdminHeader showJobCreationForm={onToggleClick} />
      <section className="pt-8">
        <div className="w-4/5 items-center mx-auto h-16 rounded-lg company-blue-bg mb-10 text-white flex justify-between px-12">
          <p>Job Title</p>
          <p>Date Modified</p>
          <p>Conditions</p>
          <p>Filter</p>
        </div>
        <JobRow />
        <JobRow />
        <JobRow />
        <JobRow />
        {toggleOn ? <JobCreationForm closeModal={handleClose} /> : null}
      </section>
      <AdminFooter />
    </div>
  );
};

export default AdminFindJobs;
