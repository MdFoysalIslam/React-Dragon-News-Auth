import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaVoicemail } from 'react-icons/fa'
import Qzone1 from '../assets/qZone1.png';
import Qzone2 from '../assets/qZone2.png';
import Qzone3 from '../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl'> Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                   Github
                </button>
                <button className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn btn-outline w-full">
                    <FaVoicemail></FaVoicemail>
                    Email and Password
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className='text-2xl mb-4'> Find Us On</h2>


                <a className='p-4 flex text-center border rounded-t-lg' href=''>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex text-center border' href=''>
                    <FaTwitter className='mr-3'></FaTwitter>
                    Facebook
                </a>
                <a className='p-4 flex text-center border rounded-b-lg' href=''>
                    <FaInstagram className='mr-3'></FaInstagram>
                    Facebook
                </a>
            </div>
        {/** Q Zone */}
        <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl'> Q Zone</h2>
                <img src={Qzone1} alt=''></img>
                <img src={Qzone2} alt=''></img>
                <img src={Qzone3} alt=''></img>
            </div>
        </div>
    );
};

export default RightSideNav;