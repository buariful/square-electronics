import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading'
import SingleOrder from './SingleOrder';


const MyOrders = () => {
    const [data, setData] = useState();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://square-electronics-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setData(data))
    })

    // const { isLoading, data } = useQuery('repoData', () =>
    //     fetch('https://square-electronics-server.onrender.com/orders').then(res =>
    //         res.json()
    //     )
    // )
    // if (isLoading) return (<Loading></Loading>)


    const myProducts = data?.filter(data => data.email === user.email);

    return (
        <div className="overflow-x-auto sm:w-11/12">
            <table className="table table-zebra max-w-full mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Product</th>
                        <th> Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Pay</th>
                        <th>Delete</th>
                    </tr>
                </thead>


                {myProducts?.map(product => <SingleOrder key={product._id} product={product}></SingleOrder>)}


                <tfoot>
                    <tr>
                        <th>Product</th>
                        <th> Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Pay</th>
                        <th>Delete</th>
                    </tr>
                </tfoot>
            </table>

        </div>
    );
};

export default MyOrders;
// const { isLoading, data } = useQuery('repoData', () =>
//     fetch('https://square-electronics-server.onrender.com/orders').then(res =>
//         res.json()
//     )
// )