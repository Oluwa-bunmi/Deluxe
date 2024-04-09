import React from 'react'
import Added from '../assets/Added.png'
import NavCart from '../assets/NavListCart.png'
import filter from '../assets/filter.png'
import userProfile from '../assets/userProfile.png'

const NavList = () => {
  return (
    <div className='flex flex-row gap-x-4 pt-5 ml-8'>
        <div className='mr-4'>
        <img src= {userProfile} alt='user profile' className='w-10 h-10'/> 
        </div>

      <ul className='flex flex-row w-[132px] h-7 w-[132px] gap-x-4'>
        <li >
          <div className="flex relative">
           <img src= {Added} alt='orders' className='h-8 w-8'/> 
           <div className='absolute ml-5 bg-primary rounded-full text-lightTwo w-[15px] h-[15px]'>
            <p className='font-hat font-bold text-xs text-center'>0</p>
            </div>
           </div>
        </li>
        <li>
          <div className="flex relative">
          <img src={NavCart} alt='Cart' className='h-8 w-8'/>
           <div className='absolute ml-5 bg-primary rounded-full text-lightTwo w-[15px] h-[15px]'>
           <p className='font-hat font-bold text-xs text-center'>0</p>
            </div> 
          </div>
        </li>
        <li>
           <img src={filter} alt='filter' className='h-8 w-8'/> 
        </li>
        <li>
            
        </li>
      </ul>
    </div>
  )
}

export default NavList
