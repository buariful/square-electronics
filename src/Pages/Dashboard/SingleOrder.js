import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { TrashIcon } from '@heroicons/react/solid'


const SingleOrder = (props) => {
    const { orderQuantity, totalPrice, status, productId, prodName, prodImg } = props.product;




    const deleteOrder = (props) => {

        console.log(props)
        fetch(`http://localhost:5000/myorders/${props}`, {
            method: 'DELETE',
            headers: {
                'content-tye': 'appliation/json'
            },
            body: JSON.stringify(props)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <tbody>
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={prodImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{prodName}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {orderQuantity}
                </td>
                <td>{totalPrice}</td>
                <td ><button className="btn btn-ghost bg-red-300 text-red-800 btn-xs">{status}</button></td>
                <td ><button className="btn btn-ghost bg-green-600 text-white btn-xs">Pay bill</button></td>

                <th>
                    <TrashIcon className='w-6 cursor-pointer' onClick={() => {
                        deleteOrder(productId)
                    }}></TrashIcon>
                </th>
            </tr>
        </tbody>
    );
};

export default SingleOrder;