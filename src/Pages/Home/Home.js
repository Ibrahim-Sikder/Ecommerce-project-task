import React from 'react';
import Hero from '../../components/Hero';
import Product from '../Product/Product';
import AddToCart from '../AddToCart/AddToCart';




const Home = () => {
    return (
        <div>
        <AddToCart></AddToCart>
            <Hero></Hero>
            <Product></Product>
        </div>
    );
};

export default Home;