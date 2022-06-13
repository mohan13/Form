import React, { useState } from "react";
import Button1 from '../ui/button'
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
const ModelForm = () => {
  const [ Model, setModel ] = useState(false);
  let model;
  if (Model) {
    model = (
      <div
        onSubmit={() => setModel(false)}
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="fixed top-0 left-0 z-10 w-screen h-screen transform-all duration-700 delay=75
            flex justify-center items-center"
      >
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
             
                <ErrorMessage
                  className="absolute grid place-content-center z-20 inset-36  bg-red-200 "
                  name="username"
                  component={"div"}
                  onClick={()=>setModel(false)}
                />
                
              <label>Password</label>
            <Field className="w-40 border mx-auto" type='password' name='password'/>
            <ErrorMessage name='password' component={'div'}  onClick={()=>setModel(false)}/>
              <Button1 name="sign in"/>
            </Form>
          );
        }}
      />

      </div>
    );
  }
  return (
    <div>
      {model}

      <div>
      
        <button onClick={() => setModel(true)}>Sign up</button>
      </div>
    </div>
  );
};

export default ModelForm;
