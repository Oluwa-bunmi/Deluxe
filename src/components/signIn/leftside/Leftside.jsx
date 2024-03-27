import React from 'react'
import LogoComponent from '../Logo/logo'
import Heading from '../heading/heading'
import Form from './form'
import Button from '../Buttons/button'
import faceBookIcon from '../../../assets/faceBook.png'
import googleIcon from '../../../assets/googleIcon.png'
import {Link} from 'react-router-dom'
const Leftside = () => {
  return (
    <div>
        <LogoComponent/>
        <Heading title='Welcome Back!' paragraph="We're thrilled to have you back with us"/>
        <Form/>
        <div>
        <p className='flex justify-center text-customRed mt-12 mb-12' >OR</p>
        </div>
        <div className='flex flex-col'>
          <div className='mb-6'>
        <Button image={googleIcon} title='Sign In with Google' variant='secondary'/>
        </div>
        <div>
        <Button image={faceBookIcon} title='Sign In with Facebook' variant='secondary'/>
        </div>
        <div className=' flex flex-row gap-x-3 justify-center mt-5'>
        <div>
        <p>Don't have an account?</p>
        </div>
        <div>
        <Link to="/Sign Up" className='text-customRed'>Sign Up</Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Leftside