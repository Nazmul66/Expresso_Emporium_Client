import React from 'react';
import './View_product.css'
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const View_product = () => {
    const viewProduct = useLoaderData();
    const { name, chef, price, photo, supplier, taste, category } = viewProduct;
    console.log(viewProduct)
    return (
    <div className='view-section'>
        <div className='main-container'>
            <Link to="/" className='flex items-center cursor-pointer mb-16'>
                <AiOutlineArrowLeft className='mr-4 text-[#331A15] text-lg' />
                <span className='back_home'>Back to home</span>
            </Link>

            <div className='cards_info'>
                <div className='lg:w-[50%] w-full'>
                    <img src={photo} alt="" className='w-[330px] mx-auto' />
                </div>
                <div className='coffee-desc lg:w-[50%] w-full'>
                    <h3 className='text-left'>Niceties</h3>
                    <h5><span className='text-[#1B1A1A] font-semibold'>Name: </span>{name}</h5>
                    <h5><span className='text-[#1B1A1A] font-semibold'>Chef: </span>{chef}</h5>
                    <h5><span className='text-[#1B1A1A] font-semibold'>Supplier: </span>{supplier} </h5>
                    <h5><span className='text-[#1B1A1A] font-semibold'>Taste: </span>{taste}</h5>
                    <h5><span className='text-[#1B1A1A] font-semibold'> Category: </span>{category}</h5>
                    <h5><span className='text-[#1B1A1A] font-semibold'>Price: </span>{price} Taka</h5>
                </div>
            </div>
      </div>
     </div>
    );
};

export default View_product;