import React from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import * as yup from 'yup'
export const schema = yup.object().shape({
username:yup.string().required("username is required"),
password:yup.string().min(8,'minimum 8 charecters required').max(9,'Strong').required("password is required")
})
const MainForm = () => {
  return (
    <div>
      <Formik
      initialValues={{
        ueranme:"",
        password:'',
      }}
      validationSchema={schema}
      render = {({errors,touched,handleSubmit})=>{
        return (
          <Form onSubmit={handleSubmit}>
            <label>Username</label>
            <Field type='text' name='username'/>
            <ErrorMessage name='username' component={'div'}/>
            <Field type='password' name='password'/>
            <ErrorMessage name='password' component={'div'}/>
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
      />
    </div>
  )
}

export default MainForm