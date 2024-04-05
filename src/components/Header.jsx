import React from 'react';
import WelcomeMsg from './WelcomeMsg';
import Search from './Search';
import NavList from './NavList';

const Header = () => {
  return (
    <div className='flex flex-row gap-x-14 mt-4'>
      <div> 
        <WelcomeMsg/>
      </div>
      <div className='flex flex-row gap-x-[216px]'>
      <Search/>
      <NavList/>
      </div>
      
    </div>
  )
}

export default Header
