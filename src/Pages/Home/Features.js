import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CreditCardIcon, CurrencyEuroIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const Features = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='font-bold text-3xl my-10'>Why to  <span className='text-neutral'>Choose us</span></h1>

                <div className='grid md:grid-cols-4 grid-cols-2'>
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                <CurrencyEuroIcon className='w-8 text-secondary'></CurrencyEuroIcon> GREAT VALUE</h2>
                            <p className='text-left'>Most popular brands with widest range of selection at best prices.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                <TruckIcon className='w-8 text-secondary'></TruckIcon> NATIONWIDE DELIVERY</h2>
                            <p className='text-left'>Over 20,000 pincodes serviceable across the country.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                <CreditCardIcon className='w-8 text-secondary'></CreditCardIcon>
                                SECURE PAYMENT</h2>
                            <p className='text-left'>Partnered with India's most popular and secure payment solutions.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                <ShieldCheckIcon className='w-8 text-secondary'></ShieldCheckIcon>
                                BUYER PROTECTION</h2>
                            <p className='text-left'>Committed to buyer interests to provide smooth shopping experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5c87694] py-5 location mx-auto mt-8 md:flex justify-around items-center">
                <div>
                    <img src={logo} alt="logo" />
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
                        <a href="http://www.twitter.com" target="_blank">
                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/hYg8g65/360-F-376121893-u-RNqv00-YX0-Jr2-Nr-WYQv-RRhu-DSm-SEAJMv.jpg" alt="twitter" />

                        </a>
                        <a href="http://www.linkedin.com" target="_blank">

                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/pyGNQHb/linkein.png" alt="linkedin" />
                        </a>
                        <a href="http://www.facebook.com" target="_blank">

                            <img className='w-8 cursor-pointer' src="https://i.ibb.co/cyLBK6Q/pngtree-facebook-logo-facebook-icon-png-image-3566127.png" alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;