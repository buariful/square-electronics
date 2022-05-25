import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import image from '../../img/TT-90__1_ (1).jpg'

const ProDetails = () => {
    const props = useParams()
    const productId = props.id;
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )
    const product = data?.find(data => data._id === productId)
    console.log(product)
    // const { availabelQuantity, minOrderQuantity, name, price, shortDescription, specification } = product;
    console.log(product)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product?.img2} className="max-w-sm rounded-lg shadow-2xl" alt={product?.name} />
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
                </div>
            </div>

        </div>
    );
};

export default ProDetails;