import React, {useState}from 'react';

const Cards2 = ({imgSrc,AddedSrc,altText, productName,price, title}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick=()=>{
      setIsClicked(!isClicked)
    };
  
  return (
    <>
    <div className='w-[536px] h-[781px] flex flex-col gap-y-8'>
        <div className='w-[532px] h-[239px] mb-8 flex flex-row mr-1 gap-x-7'>
            <div className='relative w-[215px] h-[170px]'>
                <img src={imgSrc} alt={altText} className='w-[276px] h-56 z-[1]' />
                <div >
                <img src={AddedSrc} alt='Add button' className={`absolute top-6 right-4 w-5 h-5 z-[2] ${AddedSrc === 'bestSeller'? 'bg-lightTwo' : isClicked ? 'bg-primary' : 'bg-none'}`} onClick={handleClick}  />
                </div>
            </div>

            <div className='w-[234px] h-[152px]'>
                <p className='text-hat text-dark font-normal text-xl w-36 text-nowrap mt-6 '>{productName}</p>
                <p className='text-hat text-primary font-bold text-xl mt-2'>{price}</p>
             <div className='mt-10'>
                <button className='bg-primary w-[152px] h-12 text-xs pt-1.5 pb-1.5 pl-0 pr-0 text-hat text-lightTwo font-medium rounded-lg'>
                {title}
                </button>
             </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Cards2
