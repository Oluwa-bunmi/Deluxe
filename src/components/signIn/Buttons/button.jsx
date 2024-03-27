import React from 'react'

const Button = ({image, title, variant}) => {
  const buttonStyles = ` ${variant === 'primary' ? 'bg-customRed text-white' : 'bg-white text-customRed'}`;
  return (
    <div>
      <button className={`${buttonStyles} w-[517px] h-[60px] border rounded-lg`}>
        <div className="flex flex-row justify-center gap-x-4">
        {image && <img src={image} alt='button icon' className='w-6' />}
        <span>{title}</span>
        </div>
      </button>
    </div>
  )
}

export default Button
