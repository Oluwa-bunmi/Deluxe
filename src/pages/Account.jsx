import React from 'react'
import Sidenav from '../components/Sidenav';
import Header from '../components/Header';
import Profile from '../assets/userProfileBg.png'

const Account = () => {
  return (
    <>
    <div>
      <Sidenav/>
    </div>
    <div>
        <Header/>
    </div>
    
      <main>
        <div className='flex flex-row pl-[330px] gap-x-10'>
          <div className='ml-10 '>
            <h3 className='mt-[148px] w-[182px] h-7 font-hat text-xl font-bold leading-7 text-primary mb-[61px]'>My Account Details</h3>  
              <div className='w-[339px] h-[118px] flex flex-row gap-x-10 justify-center'>
                  <img src={Profile} alt="user Profile" className='w-[118px] h-[118px]'/>
                  <button className='w-[181px] h-14 rounded-lg bg-primary text-lightTwo text-hat font-medium text-base leading-6 pl-6 pr-6 pb-4 pt-4 text-nowrap mt-[31px]'>Edit Display Picture</button>
              </div>    
                <form action="Submit" className='flex flex-col gap-y-[31px] mt-[61px]'>
                <div className='flex flex-col'>
                <label htmlFor="Username" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Username</label>
                <input type="text" placeholder='Grace Philips' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Email" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Email</label>
                <input type="email" placeholder='Graciephillips@gmail.com' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Location" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Location</label>
                <input type="text" placeholder='Lagos' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Password" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Password</label>
                <input type="text" placeholder='Gracephillips300' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                </form>    
          </div> 
          <div>
            <h3 className='mt-[148px] mr-[360px] w-[189px] h-7 font-hat text-xl font-bold leading-7 text-primary mb-10'>My Payment Details</h3>
            <form action="Submit" className='flex flex-col gap-y-[31px] mt-[61px]'>
                <div className='flex flex-col'>
                <label htmlFor="Username" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Account Name</label>
                <input type="text" placeholder='Grace Sandra Phillips ' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Bank Name" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Bank Name</label>
                <input type="text" placeholder='First Global Bank' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Account number" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Account Number</label>
                <input type="number" placeholder='3093763542' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                </form>
                <h3 className='mt-[46px] mr-[360px] w-[189px] h-7 font-hat text-xl font-bold leading-7 text-primary mb-4 mt-5'> My Delivery Details</h3>
                <form action="Submit" className='flex flex-col gap-y-[31px] mt-[48px]' >
                <div className='flex flex-col'>
                <label htmlFor="Address" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Full Address</label>
                <input type="text" placeholder='12A, New Bag Street, Lekki Lagos ' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="Phone Number" className='mb-1 text-hat font-medium text-xl text-dark leading-7'>Phone Number</label>
                <input type="text" placeholder='+234 8803  456  4656' className='w-[475px] h-[49px] border-[0.5px] border-gray rounded-lg pt-2 pr-2 pb-2 pl-1 placeholder:text-base' />
                </div>
                </form>   
            </div> 
        </div>
        <button className='ml-[800px] rounded-lg bg-primary text-lightTwo text-hat font-medium text-base leading-6 pl-0 pr-0 pb-1.5 pt-1.5 text-nowrap mt-[61px] mb-[61px] w-[200px] h-[50px]'>Edit Details</button>
      </main>
        </>
  )
}

export default Account;
