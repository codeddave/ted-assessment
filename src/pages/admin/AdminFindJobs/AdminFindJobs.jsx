import React from "react";
import AdminFooter from "../../../components/admin/AdminFooter/AdminFooter";
import AdminHeader from "../../../components/admin/AdminHeader/AdminHeader";
import JobRow from "../../../components/admin/JobRow/JobRow";
const AdminFindJobs = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden min-h-screen">
      <AdminHeader />
      <section>
        <div className="w-4/5 items-center mx-auto h-16 rounded-lg company-blue-bg mb-10 text-white flex justify-between px-12">
          <p>Job Title</p>
          <p>Date Modified</p>
          <p>Conditions</p>
          <p>Filter</p>
        </div>
        <JobRow />
      </section>
      <AdminFooter />
    </div>
  );
};

export default AdminFindJobs;
