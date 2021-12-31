import React from "react";
import { Field, Form, Formik } from "formik";
import CloseIcon from "../../../assets/icons/close.svg";
import CustomFormInput from "../../CustomFormInput.jsx/CustomFormInput";

const JobCreationForm = ({ closeModal }) => {
  return (
    <section
      style={{
        height: "65vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="modal-bg-color shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100 overflow-x-hidden overflow-y-scroll fixed z-50 tracking-wider company-blue-text scroll "
    >
      <img
        onClick={closeModal}
        src={CloseIcon}
        className="right-6 top-8 absolute"
        alt=""
      />
      <p className="text-2xl mt-6 tracking-wider">New Job</p>
      <div className="flex pt-5">
        <p className="font-light pl-2.5 text-sm text-gray-800">
          Kindly provide the required information to get matched with suitable
          candidates
        </p>
      </div>
      <Formik>
        {() => (
          <Form className="pt-10">
            <Field
              name="first_name"
              title="Job Title"
              component={CustomFormInput}
            />
            <Field
              name="last_name"
              title="Company Name"
              component={CustomFormInput}
            />{" "}
            <Field
              name="location"
              title="Location"
              component={CustomFormInput}
            />
            <Field
              name="phone"
              title="Phone Number"
              component={CustomFormInput}
            />
            <button className="w-full my-11  company-blue-bg text-white py-6 rou">
              Submit Application
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default JobCreationForm;
