import React from 'react';
import product from '../../Asset/product-img-2.10.jpg';
import product1 from '../../Asset/product-img-2.9.jpg';
import product2 from '../../Asset/product-img-2.1.jpg';
import product4 from '../../Asset/product-img-2.3.jpg';
import product5 from '../../Asset/product-img-2.4.jpg';
import product6 from '../../Asset/product-img-2.5.jpg';
import product7 from '../../Asset/product-img-2.6.jpg';
import product8 from '../../Asset/product-img-2.8.jpg';
import product9 from '../../Asset/product-img-2.7.jpg';
import product10 from '../../Asset/campain.jpg';
import furniture from '../../Asset/ads-2.1.png';
import furniture2 from '../../Asset/ads-2.2.png';
import furniture3 from '../../Asset/ads-2.3.png';
import { FaHeart } from "react-icons/fa";
import './Product.css';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        
        <div className='w-11/12 mx-auto my-10'>
            {/* Feature products */}
            <h2 className='text-3xl bold mb-5 font-bold'>Featured Products </h2>
           <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10">
           <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
                    <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-[-50px]  top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product1} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product2} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product4} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product5} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product6} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product7} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
                    <button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product7} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product7} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product7} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
                    <button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
           </div>
           <div>
            <div className="flashSale my-10 relative">
                <img className='w-full h-[400px] object-cover' src={product10} alt="" />
                <div className="timeManage top-10 left-10   absolute flex">
                    <div className='w-24 h-24 text-3xl font-bold bg-white rounded radius mr-5 day text-[#EB5757] text-center '>0</div>
                    <div className='w-24 h-24 text-3xl font-bold bg-white rounded radius mr-5 day text-[#2F80ED] text-center '>0</div>
                    <div className='w-24 h-24 text-3xl font-bold bg-white rounded radius mr-5 day text-[#219653] text-center '>0</div> 
                    <div className='w-24 h-24 text-3xl font-bold bg-white rounded radius day text-[#EF5DA8] text-center '>0</div>  
                </div>
                <div className=" top-28 left-[70px]   absolute flex">
                    <h1 className=' mr-[60px] text-xl font-bold day  text-center '>Day</h1>
                    <h1 className=' mr-[60px] text-xl font-bold day  text-center '>Hours</h1>
                    <h1 className=' mr-[50px] text-xl font-bold day  text-center '>Minutes</h1>
                    <h1 className=' text-xl font-bold day  text-center '>Seconds</h1>
                </div>
                <div className="absolute bottom-5 left-[70px]">
                    <h1 className='text-4xl font-bold '>Woo! Flash Sale </h1>
                    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rerum, Lorem ipsum dolor sit amet. sint.</p>
                    <button className='bg-[#FFBB38] px-8 py-2'>Shop Now</button>
                </div>
                
            </div>
           </div>
           {/* Furniture */}
            <div className="furniture flex justify-between mb-10">
                <img src={furniture} alt="" />
                <img src={furniture2} alt="" />
            </div>
            {/* Popular Sale */}
            <h2 className='text-3xl bold mb-5 font-bold'>Popular Sales </h2>
           <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10">
           <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
            <Link to='/cart'><button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button></Link>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-[-50px]  top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product1} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
                    <button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
            <div className="productContainer w-[360px] h-[440px] text-center bg-white  relative">
                <div className="ProductCard flex justify-center items-center">
                    <img src={product2} alt="" />
                </div>
                <div className="productText absolute bottom-6 left-[45px]">
                <h2 className='text-2xl bold '>Callflex dolore eiusmod</h2>
                <p className='text-xl'><span className='text-red-400'>BDT18.34</span> <del>BDT34.55</del></p>
                
            </div>
            <div className=" productBtn absolute bottom-10 left-[90px]">
                    <button className='px-8 py-3 bg-[#2D6F6D] text-white text-xl'>Add to Cart</button>
                </div>
                <div className='absolute duration-300  ease-in productIcon right-8 top-24 z-10'>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                    <FaHeart className='text-4xl bg-[#CCECEB] text-white p-2 mb-2'></FaHeart>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default Product;