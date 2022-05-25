

import React from 'react';
import logo from '../img/logo.png'

const footer = () => {

    return (
        <div>
            <div className="bg-[#f5c87694] py-5 px-5 location mx-auto md:flex justify-around items-center">
                <div>
                    <img src={logo} alt="logo" className='mx-auto w-20 md:w-52' />
                </div>
                <div className='text-center'>
                    <h1 className='font-semibold text-2xl '>Find us</h1>
                    <div className='text-left'>
                        <p>Phone : <span className='font-semibold'>01234568</span></p>
                        <p>Email : <span className='font-semibold'>abcextra@gmail.com</span></p>
                        <p>Address : <span className='font-semibold'>12/13 lake road , Dhanmondi, Dhaka-1205</span></p>
                    </div>
                    <h3 className='mt-8 font-semibold text-xl mb-5'>Stay connected</h3>
                    <div className='flex gap-4 justify-center'>
                        <a href="http://www.twitter.com" target="_blank" rel='noreferrer'>
                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/hYg8g65/360-F-376121893-u-RNqv00-YX0-Jr2-Nr-WYQv-RRhu-DSm-SEAJMv.jpg" alt="twitter" />

                        </a>
                        <a href="http://www.linkedin.com" target="_blank" rel='noreferrer'>

                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/pyGNQHb/linkein.png" alt="linkedin" />
                        </a>
                        <a href="http://www.facebook.com" target="_blank" rel='noreferrer'>

                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/cyLBK6Q/pngtree-facebook-logo-facebook-icon-png-image-3566127.png" alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-[#ebb045] text-base-content">
                <div>
                    <p>Copyright ©  2022- All right reserved by Square-electronics</p>
                </div>
            </footer>
        </div>
    );
};

export default footer;