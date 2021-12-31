import React from "react";
import { Field, Form, Formik } from "formik";
import CustomFormInput from "../../../components/CustomFormInput.jsx/CustomFormInput";
const LoginForm = () => {
  return (
    <div>
      <Formik>
        {() => (
          <Form className="dead-center border border-black w-3/4">
            <Field name="email" title="Email" component={CustomFormInput} />
            <Field
              name="password"
              title="Password"
              component={CustomFormInput}
            />{" "}
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
