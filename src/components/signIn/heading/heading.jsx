import React from 'react';

const Heading = ({ title, paragraph }) => {
  return (
    <div className='w-663 h-107 flex flex-col justify-center items-center leading-10'>
      <div className='w-full h-1/2 flex justify-center'>
        <h1 className='text-center text-customRed font-bold'>{title}</h1>
      </div>
      <div className='w-full h-1/2 flex justify-center mt-3 items-center'>
        <p className='text-center text-customRed'>{paragraph}</p>
      </div>
    </div>
  );
}

export default Heading;
