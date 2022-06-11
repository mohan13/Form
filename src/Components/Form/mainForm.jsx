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
          <Form onSubmit={handleSubmit} className="grid grid-col-1 gap-10  ">
            <label>Username</label>
            <Field className=" w-40 border mx-auto" type='text' name='username'/>
            <div className='relative w-full h-screen intent-40 grid place-content-center top-0 left-0 bg-green-300'>
            <ErrorMessage className='absolute z-20 top-0 left-0  grid place-content-center bg-red-200 ' name='username' component={'div'}/>
            </div>
            {/* <label>Password</label>
            <Field className="w-40 border mx-auto" type='password' name='password'/>
            <ErrorMessage name='password' component={'div'}/> */}
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
      />
    </div>
  )
}

export default MainForm