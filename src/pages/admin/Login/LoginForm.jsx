import React from "react";
import { Field, Form, Formik } from "formik";
import CustomFormInput from "../../../components/CustomFormInput.jsx/CustomFormInput";
const LoginForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoginForm;
