import React from 'react';
import Hero from '../../components/Hero';
import Product from '../Product/Product';
import AddProduct from '../Dashboard/Admin/AddProduct';




const Home = () => {
    return (
        <div>
            <AddProduct></AddProduct>
            <Hero></Hero>
            <Product></Product>
        </div>
    );
};

export default Home;