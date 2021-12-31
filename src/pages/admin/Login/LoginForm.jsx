import React from "react";
import { Field, Form, Formik } from "formik";
import CustomFormInput from "../../../components/CustomFormInput.jsx/CustomFormInput";
const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {() => (
          <Form className="dead-center ack w-3/4">
            <p className="company-blue-text text-4xl  tracking-wider font-extrabold pb-11">
              Login
            </p>
            <Field name="email" title="Email" component={CustomFormInput} />
            <Field
              name="password"
              title="Password"
              component={CustomFormInput}
            />{" "}
            <button className="w-40 mt-10  company-blue-bg text-white h-16 rounded-lg">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
