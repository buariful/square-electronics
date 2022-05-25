import React, { useEffect, useState } from 'react';
import Banner from './Banner';

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;