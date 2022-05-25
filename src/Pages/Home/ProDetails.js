import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProDetails = () => {
    const props = useParams()
    const productId = props.id;
    const [product, setProduct] = useState();


    return (
        <div>

        </div>
    );
};

export default ProDetails;