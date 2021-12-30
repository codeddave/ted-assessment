import { Form, Formik } from "formik";
import React from "react";

const JobApplicationForm = () => {
  return (
    <section>
      <Formik>{() => <Form></Form>}</Formik>
    </section>
  );
};

export default JobApplicationForm;
