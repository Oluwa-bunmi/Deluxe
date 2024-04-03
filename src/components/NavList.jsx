import React from 'react'
import Added from '../assets/Added.png'
import NavCart from '../assets/NavListCart.png'
import filter from '../assets/filter.png'
import userProfile from '../assets/userProfile.png'

const NavList = () => {
  return (
    <div>
      <ul>
        <li>
        <img src= {userProfile} Alt='user profile'/> 

        </li>
        <li>
           <img src= {Added} Alt='orders'/> 
        </li>
        <li>
           <img src={NavCart} Alt='Cart'/> 
        </li>
        <li>
           <img src={filter} Alt='filter'/> 
        </li>
        <li>
            
        </li>
      </ul>
    </div>
  )
}

export default NavList
