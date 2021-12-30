import { Field, Form, Formik } from "formik";
import React from "react";
import CustomFormInput from "../CustomFormInput.jsx/CustomFormInput";
import LocationIcon from "../../assets/icons/location.svg";

const JobApplicationForm = () => {
  return (
    <section
      style={{
        height: "65vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="modal-bg-color shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100 overflow-x-hidden overflow-y-scroll fixed z-50 tracking-wider company-blue-text scroll"
    >
      <p className="text-2xl">Front end developer</p>
      <div className="flex pt-5">
        {" "}
        <img src={LocationIcon} alt="" />
        <p className="font-light pl-2.5">Ikeja, Lagos</p>
      </div>
      <Formik>
        {() => (
          <Form className="pt-10">
            <Field
              name="first_name"
              title="First Name"
              component={CustomFormInput}
            />
            <Field
              name="last_name"
              title="Last Name"
              component={CustomFormInput}
            />{" "}
            <Field
              name="email"
              title="Email Address"
              component={CustomFormInput}
            />
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
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default JobApplicationForm;