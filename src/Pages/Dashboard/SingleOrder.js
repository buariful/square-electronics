import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { TrashIcon } from '@heroicons/react/solid'


const SingleOrder = (props) => {

    const { orderQuantity, totalPrice, status, productId } = props.product;


    const { isLoading, data } = useQuery('products', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )

    if (isLoading) return (<Loading></Loading>)

    const myProduct = data?.find(d => d._id === productId)
    const { name, shortDescription, img } = myProduct;
    console.log(name)
    return (
        <tbody>
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {orderQuantity}
                </td>
                <td>{totalPrice}</td>
                <td ><button className="btn btn-ghost bg-red-300 text-red-800 btn-xs">{status}</button></td>
                <th>
                    <TrashIcon className='w-6 cursor-pointer'></TrashIcon>
                </th>
            </tr>
        </tbody>
    );
};

export default SingleOrder;