import React, {useState}from 'react';

const Cards = ({imgSrc,AddedSrc,altText, productName,price, title} ) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick=()=>{
    setIsClicked(!isClicked)
  };


  return (
    <>
      <div className='mt-8 mb-6'>
      <div className='relative w-[215px] h-[170px]'>
       <img src={imgSrc} alt={altText} className='w-full h-44 z-[1]' />
          <div >
          <img src={AddedSrc} alt='Add button' className={`absolute top-6 right-4 w-5 h-5 z-[2] ${AddedSrc === 'bestSeller'? 'bg-lightTwo' : isClicked ? 'bg-primary' : 'bg-none'}`} onClick={handleClick}  />
          </div>
        </div>
        <div>
        <p className='text-hat text-dark font-normal size-4 w-36 text-nowrap mt-4 '>{productName}</p>
        <p className='text-hat text-primary font-bold text-base mt-1'>{price}</p>
        <div className='pt-4'>
            <button className='bg-primary w-36 h-9 text-xs pt-1.5 pb-1.5 pl-0 pr-0 text-hat text-lightTwo font-medium rounded-lg'>
            {title}
            </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Cards
