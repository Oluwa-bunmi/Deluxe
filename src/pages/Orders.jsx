import React from 'react';
import Sidenav from '../components/Sidenav';
import Header from '../components/Header';
import Cards2 from '../components/Cards2';
import Product4 from '../assets/Product4.png'
import Product9 from '../assets/Product9.png'
import Product10 from '../assets/Product10.png'
import Added from '../assets/Added.png'
const Orders = () => {
  return (
    <>
        <div className='flex flex-row gap-x-8 h-screen' >
    <div>
        <Sidenav/>
    </div>
    <div>
    <div >
        <Header/>
    </div>
    <main>
    <div className=' mt-6 w-[986px] h-80 pt-20 ml-16 mr-20 pl-[330px]'>
        <div className='text-hat w-32 h-7 font-bold size-5 text-primary mb-11 '>
            <div className='flex flex-row gap-x-[715px] mt-10 mb-10' >
            <p className='text-nowrap font-hat h-7 w-[127px]'>My Orders</p>
            <p className='text-nowrap underline font-hat w-[115px] h-7 font-medium text-sm'>Pay for All Items</p>
            </div>
                <div className='flex flex-col w- [536px] h-[781px]'>
                <Cards2 imgSrc={Product10} AddedSrc={Added} altText={'Quality Gold Bar Necklace'} productName={'Quality Gold Bar Necklace'}price= {'#6,500'} title={'Make Payment'} />
                <Cards2 imgSrc={Product9} AddedSrc={Added} altText={'Luxuary Gold Bracelet'} productName={'Luxuary Gold Bracelet'}price= {'#4,000'} title={'Make Payment'} />
                <Cards2 imgSrc={Product4} AddedSrc={Added} altText={'Top Quality Bracelets'} productName={'Top Quality Bracelets'}price= {'#3,500'} title={'Make Payment'} />
                </div>
        </div>
    </div>
    </main>
    </div>
    </div>

    </>
  )
}

export default Orders
