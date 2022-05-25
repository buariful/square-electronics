import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/solid';


const Summary = () => {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-8'>

            <div className="card bg-[#e5e5e5] shadow-xl">
                <div className="card-body mx-auto">
                    <h1><CurrencyDollarIcon className='text-neutral w-16 mx-auto'></CurrencyDollarIcon> </h1>
                    <h2 className="card-title text-5xl font-bold justify-center">250+</h2>
                    <p className='text-neutral font-semibold text-xl'>Total Sell</p>

                </div>
            </div>

            <div className="card bg-[#e5e5e5] shadow-xl">
                <div className="card-body mx-auto">
                    <h1><CurrencyDollarIcon className='text-neutral w-16 mx-auto'></CurrencyDollarIcon> </h1>
                    <h2 className="card-title text-5xl font-bold justify-center">150+</h2>
                    <p className='text-neutral font-semibold text-xl'>Happy Customers</p>

                </div>
            </div>

            <div className="card bg-[#e5e5e5] shadow-xl">
                <div className="card-body mx-auto">
                    <h1><CurrencyDollarIcon className='text-neutral w-16 mx-auto'></CurrencyDollarIcon> </h1>
                    <h2 className="card-title text-5xl font-bold justify-center">500+</h2>
                    <p className='text-neutral font-semibold text-xl'>Pending Orders</p>

                </div>
            </div>




        </div>
    );
};

export default Summary;