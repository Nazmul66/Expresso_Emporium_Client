import React from 'react';
import './Footer.css'
import logo from "../../../assets/logo.png"
import { HiPhone } from 'react-icons/hi';
import { BsFillEnvelopeFill, BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
        <footer>
            <div className="flex lg:flex-row flex-col justify-between items-center max-w-[1140px] mx-auto gap-16">
                <div className='footer-info lg:w-[55%] w-full'>
                    <img src={logo} alt="" className='lg-[45px] mb-4' />
                    <h2 className='mb-5'>Espresso Emporium</h2>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex items-center my-8'>
                        <BsFacebook className='text-[30px] text-[#331A15] mr-5' />
                        <BsTwitter className='text-[30px] text-[#331A15] mr-5' />
                        <BsInstagram className='text-[30px] text-[#331A15] mr-5' />
                        <BsLinkedin className='text-[30px] text-[#331A15]' />
                    </div>
                    <h2 className='mb-7'>Get in Touch</h2>
                    <div className='contact'>
                       <div className='flex items-center mb-5'>
                            <HiPhone className='text-[22px] text-[#331A15]' />
                            <span className='text-[#1B1A1A] text-[16px] ml-5 font-normal'>+88 01533 333 333</span>
                       </div>
                       <div className='flex items-center mb-5'>
                            <BsFillEnvelopeFill className='text-[22px] text-[#331A15]' />
                            <span className='text-[#1B1A1A] text-[16px] ml-5 font-normal'>info@gmail.com</span>
                       </div>
                       <div className='flex items-center'>
                            <FaMapMarkerAlt className='text-[22px] text-[#331A15]' />
                            <span className='text-[#1B1A1A] text-[16px] ml-5 font-normal'>72, Wall street, King Road, Dhaka</span>
                       </div>
                    </div>
                </div>

                <div className='form lg:w-[45%] w-full'>
                   <h2 className='mb-8'>Connect with Us</h2>
                   <form action="">
                       <input type="text" name="name" placeholder='Name' className='bg-white block w-full mb-4 p-[15px] rounded-[5px] outline-[#E3B577] input-box' />
                       <input type="email" name="email" placeholder='email' className='bg-white block w-full mb-4 p-[15px] rounded-[5px] outline-[#E3B577] input-box' outline-none />
                       <textarea name="msg-box" className='outline-[#E3B577] bg-white rounded-[5px] block w-full mb-4 p-[15px] h-[196px] input-box' placeholder='Message'></textarea>
                   </form>
                </div>
            </div>
        </footer>
           <div className='copyRight'>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
           </div>
     </>
    );
};

export default Footer;