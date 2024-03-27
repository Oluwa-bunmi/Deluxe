import React from 'react';
import logoImage from '../../../assets/Logo.png'; // Import the logo image

const LogoComponent = () => {
    return (
        <div className='flex justify-center items-center h-40'>
            <img src={logoImage} alt="Logo" className='w-40 h-40 flex-none order-2 flex-grow-0 z-10' />
        </div>
    );
}

export default LogoComponent;