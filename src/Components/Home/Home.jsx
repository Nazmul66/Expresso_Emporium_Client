import React from 'react';
import Banner from '../Section/Banner/Banner';
import Category from '../Section/Category/Category';
import Coffee from '../Section/Coffee/Coffee';
import Product from '../Section/Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Product></Product>
            <Coffee></Coffee>
        </div>
    );
};

export default Home;