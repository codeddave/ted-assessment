import React from "react";
import { Field, Form, Formik } from "formik";
import CustomFormInput from "../../../components/CustomFormInput.jsx/CustomFormInput";
import { logIn } from "../../../api/admin";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
const LoginForm = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 678px)" });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);

          logIn(values);
        }}
      >
        {() => (
          <Form
            className={classNames("ack w-4/5 mx-auto md:mx-0 sm:w-3/4", {
              "dead-center": !isMobile,
            })}
          >
            <p className="company-blue-text text-4xl  tracking-wider font-extrabold pb-11">
              Login
            </p>
            <Field name="email" title="Email" component={CustomFormInput} />
            <Field
              name="password"
              title="Password"
              type="password"
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
