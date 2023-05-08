import React, { useEffect, useState } from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import Coffee_card from '../../pages/Coffee_card/Coffee_card';

const Product = () => {
    const [coffee, setCoffee] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/coffees")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCoffee(data)
        })
    }, [])
    return (
        <div className='product_section'>
            <div className='main-container'>
                <h4>--- Sip & Savor ---</h4>
                <h3>Our Popular Products</h3>
                <Link to="/add" className='text-center block mb-[60px]'>
                    <button className='btn-add'>Add Coffee <FaCoffee className='inline' /> </button>
                </Link> 

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        coffee.map(coffees => <Coffee_card key={coffees._id} 
                            setCoffee={setCoffee}
                            coffee={coffee}
                            coffees = {coffees}
                            ></Coffee_card> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;