import React from 'react';

const Cards = ({imgSrc,AddedSrc,altText, productName,price} ) => {
  return (
    <div>
      <div className='mt-8 mb-6'>
      <div className='relative' style={{ width: '215px', height: '170px' }}>
       <img src={imgSrc} alt={altText} className='w-full h-44' />
       <img src={AddedSrc} alt='Add button' className='absolute top-6 right-4 w-5 h-5' />
        </div>
        <p className='text-hat text-dark font-normal size-4 w-36 text-nowrap mt-4 '>{productName}</p>
        <p className='text-hat text-primary font-bold text-base mt-1'>{price}</p>
        <div>
            <button className='bg-primary w-36 h-9 text-hat text-lightTwo font-medium text-xs rounded-lg pt-1.5 pb-1.5 pl-0 pr-0 mt-4'>
                Add to Cart
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
