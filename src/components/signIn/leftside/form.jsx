import React from 'react';
import Button from '../Buttons/button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post('#.../', values);
        console.log(response.data); // Handle success
      } catch (error) {
        console.error('Sign in failed', error.response.data); // Handle error
        setErrors({ submit: error.response.data.message }); // Set form submission error
      }
      setSubmitting(false);
    }
  });

  return (
    <div className='w-504 h-222 flex flex-col items-start gap-24 mt-8 isolation-isolate'>
      <form onSubmit={formik.handleSubmit} className='w-full mb-12'>
        <div className="flex flex-col mb-5">
          <label className='mb-3 ml-1'>Email</label>
          <input placeholder='Email' type='email' name='email' value={formik.values.email} onChange={formik.handleChange} className='w-[519px] h-[49px] border rounded-lg p-2'/>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className="flex flex-col mb-5">
          <label className='mb-3 ml-1'>Password</label>
          <input placeholder='Password' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} className='w-[519px] h-[49px] border rounded-lg p-2'/>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <div className="flex flex-row gap-x-64 mt-2 ml-1">
        <div className="flex items-center">
          <input id="remember" type='checkbox' name='remember' checked={formik.values.remember} onChange={formik.handleChange}/>
          <label htmlFor="remember" className="ml-2">Remember Me</label>
        </div>
        <div>
        <Link to="/forgot-password" className='text-customRed'>Forgot Password?</Link>
        </div>
        </div>
      </form>
      <Button type= 'Submit' title='Sign In' variant='primary'/>

    </div>
  );
}

export default Form;
