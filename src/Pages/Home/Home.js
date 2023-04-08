import React from 'react';
import Hero from '../../components/Hero';
import Product from '../Product/Product';
import AdminDashboard from '../Dashboard/AdminDashboard';

const Home = () => {
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            <Hero></Hero>
            <Product></Product>
        </div>
    );
};

export default Home;