import React from 'react';
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
    const { user, text, ratings } = review;
    const firstExample = {
        size: 25,
        value: ratings,
        edit: false
    };
    return (
        <div className='bg-base-200 shadow-xl rounded-lg m-5 flex p-5'>
            <div className='basis-1/3'>
                <h2 className='font-semibold'>{user}</h2>
                <div class="rating">
                    <ReactStars {...firstExample} />
                </div>
            </div>
            <div className='basis-2/3 text-right'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;

