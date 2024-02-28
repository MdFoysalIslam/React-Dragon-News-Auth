import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
           <h2 className='text-3xl'> This is home</h2>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav/>
                </div>
                <div className='md:col-span-2 border'>
                    <h2 className='text-4xl'> News coming soon...</h2>
                </div>
                <div className='border'>
                    <RightSideNav/>
                </div>
           </div>
        </div>
    );
};

export default Home;