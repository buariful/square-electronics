import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';

const Products = () => {
    const [products, setProducts] = useState()
    console.log(products)
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='font-bold text-3xl my-10'>Our <span className='text-[#ff2907]'>Products</span></h1>
            <div className='w-11/12 grid md:grid-cols-4 grid-cols-1 mx-auto gap-8'>

                {products?.map(product => <SingleProducts product={product} key={product.id}></SingleProducts>)}
            </div>
        </div>
    );
};

export default Products;