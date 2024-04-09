import React from 'react';
import Sidenav from '../components/Sidenav';
import Cards from '../components/Cards';
import Product1 from '../assets/Product1.png';
import Product2 from '../assets/Product2.png';
import Product3 from '../assets/Product3.png';
import Product4 from '../assets/Product4.png';
import Product5 from '../assets/Product5.png';
import Product6 from '../assets/Product6.png';
import Product7 from '../assets/Product7.png';
import Product8 from '../assets/Product8.png';
import Added from '../assets/Added.png';
import bestSeller from '../assets/bestSeller.png';
import Header from '../components/Header';

const Collection = () => {
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
    <main className='flex flex-col gap-y-[76px]'>
    <div className=' mt-6 w-[986px] h-80 pt-20 ml-16 mr-20 pl-[297px]'>
        <div className='text-hat w-32 h-7 font-bold size-5 text-primary mb-11 '>
            <div className='flex flex-row gap-x-[715px] mt-10' >
            <p className='text-nowrap font-hat h-7 w-[127px]'>Newly Added</p>
            <p className='text-nowrap underline font-hat w-[115px] h-7 font-medium text-sm'>Multiple Selection</p>
            </div>
                <div className='flex flex-row gap-x-10'>
                    <Cards imgSrc={Product1} AddedSrc={Added} altText={'Luxury White Earrings'} productName={'Luxury White Earring'}price= {'#3,000'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product2} AddedSrc={Added} altText={'Classy Gold Rings'} productName={'Classy Gold Rings'}price= {'#3,000'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product3} AddedSrc={Added} altText={'Beautiful Pendant Necklaces'} productName={'Beautiful Pendant Necklaces'}price= {'#4,000'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product4} AddedSrc={Added} altText={'Top Quality Gold Bracelets'} productName={'Top Quality Gold Bracelets'}price= {'#3,500'} title={'Add to Cart'}/>
                </div>
        </div>
    </div>
    <div className=' mt-10 w-[1059px] h-80 ml-16 pl-[297px] pt-[76px]'>
        <div className='text-hat w-32 h-7 font-bold size-5 text-primary mb-11'>
            <p>Best Sellers</p>
            <div className='flex flex-row gap-x-10'>
                    <Cards imgSrc={Product5} AddedSrc={bestSeller} altText={'Beautiful Gold Love Earring'} productName={'Beautiful Gold Love Earring'}price= {'#2,500'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product6} AddedSrc={bestSeller} altText={'Classy Gold Noose Pendant'} productName={'Classy Gold Noose Pendant'}price= {'#6,500'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product7} AddedSrc={bestSeller} altText={'Beautiful Pendant Necklaces'} productName={'Beautiful Gold Ring'}price= {'#2,500'} title={'Add to Cart'}/>
                    <Cards imgSrc={Product8} AddedSrc={bestSeller} altText={'Lovely Gold Pearl Pendant Necklace'} productName={'Lovely Gold Pearl Pendant Necklace'}price= {'#6,500'} title={'Add to Cart'}/>
                </div>

        </div>
    </div>
    </main>
    </div>
    </div>
    </>
  )
}

export default Collection;
