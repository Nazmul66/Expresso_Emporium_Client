import React from 'react';
import Header from '../Section/Header/Header'
import Footer from '../Section/Footer/Footer'
import { Outlet } from 'react-router-dom';

const MainFile = () => {
    return (
        <div>
            <Header></Header>
               <div className=''>
                  <Outlet />
               </div>
            <Footer></Footer>
        </div>
    );
};

export default MainFile;