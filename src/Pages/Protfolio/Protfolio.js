import React from 'react';
import './protfolio.css'
const Protfolio = () => {
    return (
        <div>
            <div className='min-h-screen port-banner relative'>
                <div className='absolute inset-0 z-20 bg-gradient-to-r from-[#543fae] to-[#412e8f] opacity-90 bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center'>
                    <div class="avatar">
                        <div class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/2y2P7q0/ariful.jpg" alt='avatar' />


                        </div>
                    </div>
                    <div className='ml-5 text-white'>
                        <h1 className='font-semibold md:text-3xl text-xl text-white'>Hi, I am Ariful Islam</h1>
                        <div className='flex'>
                            <h2>Find me on</h2>
                            <a href="https://www.facebook.com/buariful" target='_blank' rel="noreferrer"><img src="https://i.ibb.co/cyLBK6Q/pngtree-facebook-logo-facebook-icon-png-image-3566127.png" alt="" className='w-6 rounded-md ml-3' /></a>
                            <a href="https://www.linkedin.com/in/md-bu-ariful-islam-70210b202/" target='_blank' rel="noreferrer"><img src="https://i.ibb.co/pyGNQHb/linkein.png" alt="" className='w-6 rounded-md ml-3' /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* my skilss */}
            <div className='grid md:grid-cols-2 grid-cols-1 text-left w-11/12 mx-auto my-14'>
                <div>
                    <h1 className='text-2xl font-bold'>Who I am?</h1>
                    <h1 className=''>Hi thi is Ariful islam. I am a web desginer and developer</h1>
                    <h1 className='text-xl'>My skills</h1>

                    <p className='mt-5'>Html and Css</p>
                    <progress class="progress progress-primary w-56" value="91" max="100"></progress> <br />

                    <p className=''>Javascript</p>
                    <progress class="progress progress-primary w-56" value="85" max="100"></progress> <br />

                    <p className=''>React</p>
                    <progress class="progress progress-primary w-56" value="85" max="100"></progress> <br />

                    <p className=''>Mongodb</p>
                    <progress class="progress progress-primary w-56" value="85" max="100"></progress> <br />

                </div>
                <div>

                </div>
            </div>

            {/* my works */}
            <div>
                <h1 className='text-2xl font-bold'>Some of my works</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-5 my-10'>
                    <div>
                        <a href="https://incredible-piroshki-93c289.netlify.app/home">
                            <img src="https://i.ibb.co/VBjM53J/Screenshot-5.png" alt="" className='rounded-lg' />
                        </a>
                    </div>
                    <div>
                        <a href="https://mobile-shop-bd.netlify.app/">
                            <img src="https://i.ibb.co/r0HpyQx/Screenshot-6.png" alt="" className='rounded-lg' />
                        </a>
                    </div>
                    <div>
                        <a href="https://clever-blini-42477d.netlify.app/home">
                            <img src="https://i.ibb.co/5Y41bbf/Screenshot-7.png" alt="" className='rounded-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;