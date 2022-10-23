import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';


const AddReview = () => {
    const [reviews, setReviews] = useState();
    const [user] = useAuthState(auth);
    const [data, setData] = useState('');

    const handleReview = event => {
        event.preventDefault();
        const review = {
            user: user.displayName,
            ratings: event.target.rating.value,
            text: reviews
        }

        fetch('https://square-electronics-server.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => setData(data));

        setReviews('')
        toast.success('Thanks a lot for your feedback..')
    }
    return (
        <div>
            <div className='bg-[#e5e5e5] p-10 md:w-10/12 mx-auto'>
                <h1 className='font-bold text-neutral'>Please give us a feedback. It will help us to develop our realation.....</h1>

                <form onSubmit={handleReview}>
                    <label className="label justify-around mt-8">
                        <span className="label-text">Write your experience</span>

                    </label>
                    <textarea
                        className="textarea input-bordered w-full max-w-xs"
                        rows="5"
                        placeholder="Write here..."
                        name='text'
                        onChange={event => {
                            setReviews(event.target.value);
                        }} value={reviews}
                    />


                    <div className="rating mt-4">
                        <small>Ratings: </small>
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-500" value='1' />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-500" value='2' />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-500" value='3' />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-500" value='4' />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-500" value='5' />
                    </div>
                    <br />
                    <input type="submit" value="Send" className='btn btn-neutral mt-4' />
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    );
};

export default AddReview;