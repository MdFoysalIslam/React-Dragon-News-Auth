import React from 'react';
import RightSideNav from './RightSideNav';
import Header from './Header';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const NewsReadMore = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2>News Details</h2>
            <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsReadMore;