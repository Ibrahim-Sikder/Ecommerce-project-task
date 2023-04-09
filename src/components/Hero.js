import React from 'react';
import hero from '../Asset/phone3.png'
const Hero = () => {
    return (
        <div className='hero-area grid lg:grid-cols-2 items-center bg-[#2D6F6D] text-white px-10 py-24'>
            
            <div className=''>
               <h2 className='animate__rollIn animate__animated  animate__delay-.5s text-5xl font-bold font-fugiat mb-5 uppercase italic '>Welcome to my shop</h2>
                <p className='animate__animated animate__backInLeft animate__delay-.5s'>Mobile phones became a very important element of well-developed societies. It is not only a device, but also a “smart” part of our life. Very often this devices support people with the answers to the various questions, like: opening hours, weather forecast, news, sport games results, clues, etc. So in a way, that devices solves everyday lifes issues and generally provides relief to peoples brains,</p>
                <button className=' animate__animated animate__backInLeft animate__delay-.5s btn btn-outline bg-[#0E0F20] text-white px-8 mt-3 mb-5'>Buy Now </button>
            </div>

            <div className= 'animate__animated animate__delay-.5s animate__backInRight'>
                <img className='w-full' src={hero} alt="" />
            </div>


           
        </div>
    );
};

export default Hero;