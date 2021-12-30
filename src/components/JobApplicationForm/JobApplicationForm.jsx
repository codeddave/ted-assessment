import { Field, Form, Formik } from "formik";
import React from "react";
import CustomFormInput from "../CustomFormInput.jsx/CustomFormInput";

const JobApplicationForm = () => {
  return (
    <section
      style={{
        height: "65vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className=" in bg-black shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100 overflow-x-hidden overflow-y-auto fixed z-50"
    >
      <Formik>
        {() => (
          <Form>
            <Field
              name="first_name"
              title="First Name"
              component={CustomFormInput}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default JobApplicationForm;
