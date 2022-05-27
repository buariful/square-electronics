import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='font-bold text-3xl my-10'>Our <span className='text-neutral'>Products</span></h1>
            <div className='w-11/12 grid md:grid-cols-4 grid-cols-1 mx-auto gap-8'>

                {products?.map(product => <SingleProducts product={product} key={product._id}></SingleProducts>)}
            </div>
        </div>
    );
};

export default Products;