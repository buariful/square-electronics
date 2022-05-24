import React, { useEffect, useState } from 'react';

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;