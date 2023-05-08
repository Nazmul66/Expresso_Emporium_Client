import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='main-container' >
                <div className='content-div'>
                    <h1>Would you like a Cup of Delicious Coffee?</h1>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className='text-center lg:text-left'>
                        <button className='btn-learn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;