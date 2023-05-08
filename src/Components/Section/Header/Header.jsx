import React from 'react';
import './Header.css'
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className='max-w-[1140px] mx-auto '>
               <div className='flex items-center justify-center'>
                <img src={logo} alt="" className='lg:w-[5%] w-[60px]' />
                    <h2 className='text-white lg:text-[30px] text-[26px]'>Espresso Emporium</h2>
               </div>
            </div>
        </header>
    );
};

export default Header;