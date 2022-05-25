import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-3xl my-10'>What our <span className='text-neutral'> Client </span>says</h1>
            <div className='grid md:grid-cols-3 grid-1'>
                {reviews?.map(review => <Review key={review._id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;