import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup
    .string()
    .min(8, "minimum 8 charecters required")
    .max(9, "Strong")
    .required("password is required"),
});
const MainForm = (backPop) => {
  return (
    <div>
      <Formik
        initialValues={{
          ueranme: "",
          password: "",
        }}
        validationSchema={schema}
        render={({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} className="static grid grid-col-1 gap-1">
              <label>Username</label>
              <Field
                className=" w-40 border mx-auto"
                type="text"
                name="username"
              />
              <div className="fixed z-10 inset-40 bg-green-400" >
                <ErrorMessage
                  className="absolute grid place-content-center z-20 inset-36  bg-red-200 "
                  name="username"
                  component={"div"}
                />
                 </div>
              {/* <label>Password</label>
            <Field className="w-40 border mx-auto" type='password' name='password'/>
            <ErrorMessage name='password' component={'div'}/> */}
              <button type="submit" >Submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default MainForm;
