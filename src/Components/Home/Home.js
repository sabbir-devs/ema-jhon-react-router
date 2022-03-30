import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';

const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1>Home products: {product.length}</h1>
            <div className="product_container">
                {
                    product.map(prodcuts => <Shop product = {prodcuts} key={prodcuts.id}></Shop>)
                }
            </div>
        </div>
    );
};

export default Home;