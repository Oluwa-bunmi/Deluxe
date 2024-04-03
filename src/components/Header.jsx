import React from 'react';
import WelcomeMsg from './WelcomeMsg';
import Search from './Search';
import NavList from './NavList';

const Header = () => {
  return (
    <div className=''>
      <div >
        <WelcomeMsg/>
      </div>
      <div className='flex flex-row'>
      <Search/>
      <NavList/>
      </div>
      
    </div>
  )
}

export default Header
