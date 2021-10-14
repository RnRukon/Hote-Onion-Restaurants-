import React from 'react';

const Footer = () => {
    return (
        <div className=' container-fluid bg-gray-900 mt-5' >
            <div className='row text-white fw-bolder pt-14 px-6'>
                <div className='col-lg-6 mb-4'>
                    <img className=" w-50" src="https://i.ibb.co/Wn8kLFW/logo2.png" alt="" />
                </div>
                <div className='col-lg-3 col-sm-6 mt-sm-6'>
                    <p>About Online Food</p>
                    <p>Read out Blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className='col-lg-3 col-sm-6 mt-sm-6'>
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurant near me</p>
                </div>
            </div>
            <div>
                <hr className=' text-indigo-50' />
                <small className='text-purple-50 ms-5'>Copyright 2021 Online food</small>
            </div>
            <br /><br />
        </div>
    );
};

export default Footer;