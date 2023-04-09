import React, { useEffect, useState } from 'react';
import DisplayProductDetails from './DisplayProductDetails';

const ProductDetails = () => {
    const [products, setProduct] = useState([])
        useEffect( () => {
        fetch('Product.json')
        .then( res => res.json())
        .then( data => setProduct(data))
        .catch( err => console.error(err));
    } , [])

    return (
        <div>
            {
                products?.map(product=><DisplayProductDetails
                key={product._id}
                product={product}
                ></DisplayProductDetails>)
            }
        </div>
    );
};

export default ProductDetails;