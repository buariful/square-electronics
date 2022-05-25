import { CreditCardIcon, CurrencyEuroIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/solid';
import React from 'react';

const Features = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='font-bold text-3xl my-10'>Why to  <span className='text-neutral'>Choose us</span></h1>

                <div className='grid md:grid-cols-4 grid-cols-2'>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">
                                <CurrencyEuroIcon className='w-8 text-secondary hidden md:static'></CurrencyEuroIcon> GREAT VALUE</h2>
                            <p className='text-left'>Most popular brands with widest range of selection at best prices.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">
                                <TruckIcon className='w-8 text-secondary hidden md:static'></TruckIcon> NATIONWIDE DELIVERY</h2>
                            <p className='text-left'>Over 20,000 pincodes serviceable across the country.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">
                                <CreditCardIcon className='w-8 text-secondary hidden md:static'></CreditCardIcon>
                                SECURE PAYMENT</h2>
                            <p className='text-left'>Partnered with India's most popular and secure payment solutions.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">
                                <ShieldCheckIcon className='w-8 text-secondary hidden md:static'></ShieldCheckIcon>
                                BUYER PROTECTION</h2>
                            <p className='text-left'>Committed to buyer interests to provide smooth shopping experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 py-5 md:flex bg-[#e5e5e5]'>
                <div className='basis-1/3 '>
                    <h3 className='font-semibold text-xl mb-5'>Member of</h3>
                    <img src="https://i.ibb.co/sgS7TNp/E-CAB-Logo.png" className='w-28 mx-auto' alt="e-cab" />
                </div>
                <div className='basis-2/3'>
                    <h3 className='font-semibold text-xl mb-5'>Our partners</h3>
                    <img src="https://i.ibb.co/PWwjRnf/ecourier-logo-01.png" alt="e-courier" className='w-1/3 mx-auto' />
                    <img src="https://i.ibb.co/t4HZbqN/dhl-logo.png" alt="dhl" className='w-1/3 mx-auto' />
                </div>
            </div>



        </div>
    );
};

export default Features;