import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ProDetails = () => {
    // for form value clear
    const [shippingAddress, setShippingAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');

    // get the user
    const [user] = useAuthState(auth);

    // get the specific product
    const props = useParams()
    const productId = props.id;
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )
    const product = data?.find(data => data._id === productId)

    if (isLoading) {
        return <Loading></Loading>
    }

    // for submit the form




    const handleSUbmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const shippingAddress = event.target.shippingAddress.value;
        const mobileNumber = event.target.mobileNumber.value;
        const orderQuantity = event.target.orderQuantity.value;


        // reset the form input value
        setShippingAddress('');
        setMobileNumber('');
        setOrderQuantity('');

    }
    return (
        <div className='w-11/12 mx-auto'>
            {/* product deatail */}
            <div className="py-10  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="">
                    <img src={product?.img2} className="max-w-sm rounded-lg shadow-2xl w-10/12 mx-auto" alt={product?.name} />
                </div>

                <div className='text-left ml-4'>
                    <h1 className="text-5xl font-bold">{product?.name}</h1>
                    <p className="py-6">{product?.shortDescription}</p>
                    <h4 className='font-bold'>Min-order quantity : {product?.minOrderQuantity}</h4>
                    <h4 className='font-bold text-xl'>Available : <span className='font-bold text-secondary '> {product?.availabelQuantity}</span></h4>
                    <h4 className='font-bold text-xl'>Price per unit : $ <span className='font-bold text-secondary text-3xl'> {product?.price}</span></h4>

                    <div className='mt-4'>
                        <h3 className='text-xl'>Specifications :</h3>
                        <ul>
                            {product?.specification.map(data => <small><li>{data}</li></small>)}
                        </ul>
                    </div>

                </div>


                {/* user info for replace order */}
                <div>
                    <form className=' bg-base-200 shadow-lg rounded-lg w-8/12 md:w-1/2 lg:w-10/12 mx-auto p-5' onSubmit={handleSUbmit}>

                        <input type="text" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs mb-3" name='name' />

                        <input type="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs mb-3" name='email' />

                        <label className="label">
                            <span className="label-text">Shipping address</span>
                        </label>
                        <input type="text" placeholder='Including district and division' className="input input-bordered w-full max-w-xs mb-3" name='shippingAddress' onChange={event => setShippingAddress(event.target.value)} value={shippingAddress} />


                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type="number" placeholder="012546987" required className="input input-bordered w-full max-w-xs mb-3" name='mobileNumber' onChange={event => setMobileNumber(event.target.value)} value={mobileNumber} />

                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>

                        <input type="number" required className="input input-bordered w-full max-w-xs mb-3" name='orderQuantity' onChange={event => setOrderQuantity(event.target.value)} value={orderQuantity} />

                        <input type="submit" value="Purchase" className='btn btn-secondary' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProDetails;