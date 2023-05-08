import React from 'react';
import './Category.css'
import icon_1 from '../../../assets/icon 1.png'
import icon_2 from '../../../assets/icon 2.png'
import icon_3 from '../../../assets/icon 3.png'
import icon_4 from '../../../assets/icon 4.png'

const Category = () => {
    return (
        <div className='category_Section'>
            <div className='main_container'>
                <div className='category-item'>
                   <img src={icon_1} alt="" className='w-[60px] block mx-auto lg:mx-0 mb-4' />
                   <h3>Awesome Aroma</h3>
                   <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='category-item'>
                   <img src={icon_2} alt="" className='w-[60px] mx-auto lg:mx-0 block mb-4' />
                   <h3>High Quality</h3>
                   <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='category-item'>
                   <img src={icon_3} alt="" className='w-[60px] mx-auto lg:mx-0 block mb-4' />
                   <h3>Pure Grades</h3>
                   <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='category-item'>
                   <img src={icon_4} alt="" className='w-[60px] mx-auto lg:mx-0 block mb-4' />
                   <h3>Proper Roasting</h3>
                   <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Category;