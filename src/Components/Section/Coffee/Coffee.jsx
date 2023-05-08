import React from 'react';
import './Coffee.css'
import coffee_1 from '../../../assets/coffee 1.png'
import coffee_2 from '../../../assets/coffee 2.png'
import coffee_3 from '../../../assets/coffee 3.png'
import coffee_4 from '../../../assets/coffee 4.png'
import coffee_5 from '../../../assets/coffee 5.png'
import coffee_6 from '../../../assets/coffee 6.png'
import coffee_7 from '../../../assets/coffee 7.png'
import coffee_8 from '../../../assets/coffee 8.png'

const Coffee = () => {
    return (
        <div className='coffee-section'>
           <div className='main-container'>
                <h4>Follow Us Now</h4>
                <h3>Follow on Instagram</h3> 

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                    <img src={coffee_1} alt="" className='w-full' />
                    <img src={coffee_2} alt="" className='w-full' />
                    <img src={coffee_3} alt="" className='w-full' />
                    <img src={coffee_4} alt="" className='w-full' />
                    <img src={coffee_5} alt="" className='w-full' />
                    <img src={coffee_6} alt="" className='w-full' />
                    <img src={coffee_7} alt="" className='w-full' />
                    <img src={coffee_8} alt="" className='w-full' />
                </div>
            </div> 
        </div>
    );
};

export default Coffee;