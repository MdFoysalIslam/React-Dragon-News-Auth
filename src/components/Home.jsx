import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const Home = () => {
    const news = useLoaderData();
console.log(news)

    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
           <h2 className='text-3xl'> This is home</h2>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div >
                    <LeftSideNav/>
                </div>
                <div className='md:col-span-2 border'>
                    {
                        news.map(aNews => <NewsCart
                        key={aNews._id}
                        news={aNews}
                            ></NewsCart>)
                    }
              
                </div>
                <div>
                    <RightSideNav/>
                </div>
           </div>
        </div>
    );
};

export default Home;