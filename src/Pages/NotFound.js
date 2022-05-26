import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2 className='mt-8 font-bold text-3xl'>There is nothing to show . Your url is wrong . Go back to..</h2>
            <Link to='/' className='btn btn-secondary font-bold mt-4 mb-8'>Home</Link>
            <img src="https://i.ibb.co/QXFpLFB/404-img.jpg" alt="404" className='mx-auto rounded-lg w-60' />
        </div>
    );
};

export default NotFound;