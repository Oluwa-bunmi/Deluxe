import React from 'react'
import Leftside from '../components/signIn/leftside/Leftside'
import Rightside from '../components/signIn/rightSide/image'


const SignIn = () => {
  return (
    <>
    <div className='box-border flex justify-center items-center gap-48 isolate w-1440 h-1023'>
    <div className='flex justify-center gap-x-12'>
      <div className='flex-none order-0 self-stretch flex-grow-0 z-0'>
      <Leftside className="w-663 h-1023 rounded-l-12 border-r-1 border-gray-200"/>
      </div>
      <div className="flex-none order-0 self-stretch flex-grow-0 z-0">
      <Rightside className="w-729 h-1023"/>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignIn
