import React from 'react';
import './ErrorPage.css'
import error from '../../../assets/404.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Header from '../../Section/Header/Header';
import Footer from '../../Section/Footer/Footer';

const ErrorPage = () => {
    return (
       <>
        <Header></Header>
        <div className='lg:py-20 py-7 bg-white'>
            <Link to="/" className='flex items-center justify-center cursor-pointer mb-16'>
                    <AiOutlineArrowLeft className='mr-4 text-[#331A15] text-lg' />
                    <span className='back_home'>Back to home</span>
            </Link>
            <div className=''>
                <img src={error} alt="" className='lg:w-[65%] w-full mx-auto' />
            </div>
        </div>
        <Footer></Footer>
     </> 
    );
};

export default ErrorPage;