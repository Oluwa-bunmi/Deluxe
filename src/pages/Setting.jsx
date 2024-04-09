import React from 'react'
import Sidenav from '../components/Sidenav'
import Header from '../components/Header'

const Setting = () => {
  return (
    <>
    <div className='flex flex-row gap-x-8 h-screen'>
      <div>
        <Sidenav/>
      </div>
      <div>
        <Header/>
      </div>
      </div>
    </>
  )
}

export default Setting
