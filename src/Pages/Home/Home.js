import React from 'react';
import Hero from '../../components/Hero';
import Product from '../Product/Product';
import Dashboard from '../Dashboard/Dashboard';



const Home = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            <Hero></Hero>
            <Product></Product>
        </div>
    );
};

export default Home;