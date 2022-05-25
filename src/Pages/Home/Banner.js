import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero banner">
                <div className="hero-content text-center text-neutral-content py-9 md:py-24">
                    <div className="w-10/12 md:w-8/12">
                        <h1 className="mb-5 text-5xl font-bold text-[#ff2907]">Hello there</h1>
                        <p className="mb-5 text-[#2e0000] font-semibold"><span className='text-2xl font-bold text-[#ff2907]'>Square Electric</span> has been selling power tools in Bangladesh for the last 20 years. You need something done fast? We have industrial pressure washers, automatic screwdrivers and circular saws. We also have rotary hammer drill machines, bosch drill machine, impact wrenches and chainsaws. But wait, there is more, demolition hammer drills, Dust blowers. Even, Jigsaws, Angle grinders and heavy duty sanders. We also hold Industrial vacuum cleaners. If you have any queries at all please call us now..</p>
                        <a href="#products"> <button className="btn btn-primary">Our Products</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;