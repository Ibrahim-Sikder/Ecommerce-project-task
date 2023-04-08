import React from 'react';
import  { useState } from 'react';
import Calendar from 'react-calendar';
import product from '../../Asset/ads-2.1.png'
import product2 from '../../Asset/ads-2.2.png'
import product3 from '../../Asset/product-img-2.9.jpg'
import 'react-calendar/dist/Calendar.css';
const AddToCart = () => {
     const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className="shoppingCart w-11/12 my-10 mx-auto">
                <h2 className='text-xl '>Delivery Information</h2>
                <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 '>
                    <div className='col-span-2'>
                    <div className='-mb-10 col-span-2 w-10/12 bg-[#F6F6F6]  p-8 flex justify-between'>
                        <div>
                            <p className=' text-black mb-1'>Name</p>
                            <input className='py-3 pl-3 border-none w-[300px]' type="text" placeholder="Name" />
                        </div>
                        <div>
                            <p className=' text-black mb-1'>Mobile number</p>
                            <input className='py-3 pl-3 border-none w-[300px]' type="text" placeholder="Mobile" />
                        </div>
                    </div>
                    <div className='-mb-10 col-span-2 w-10/12 bg-[#F6F6F6]  p-8 flex justify-between'>
                        <div>
                            <p className=' text-black mb-1'>Email</p>
                            <input className='py-3 pl-3 border-none w-[300px]' type="text" placeholder="Email" />
                        </div>
                        <div>
                            <p className=' text-black mb-1'>City</p>
                            <input className='py-3 pl-3 border-none w-[300px]' type="text" placeholder="City" />
                        </div>
                    </div>
                    <div className='-mb-10 col-span-2 w-10/12 bg-[#F6F6F6]  p-8 flex justify-between'>
                        <div>
                            <p className=' text-black mb-1'>State1</p>
                            <input className='py-3 pl-3 border-none w-[200px]' type="text" placeholder="Stat1" />
                        </div>
                        <div>
                            <p className=' text-black mb-1'>Zip code</p>
                            <input className='py-3 pl-3 border-none w-[150px]' type="text" placeholder="Zip code" />
                        </div>
                        <div>
                            <p className=' text-black mb-1'>State1</p>
                            <input className='py-3 pl-3 border-none w-[150px]' type="text" placeholder="Stat1" />
                        </div>
                    </div>
                    <div className='-mb-10 col-span-2 w-10/12 bg-[#F6F6F6]  p-8 flex justify-between'>
                        <div>
                            <div>
                                <p className=' text-black mb-1'>Address</p>
                                <input className='py-3 mb-3 pl-3 border-none w-[150px]' type="text" placeholder="Address" />
                            </div>
                            <div className=''>
                                <span>Shedule delivary</span>
                            <input type="range" min="0" max="50" value="10" className="range range-primary" />
                            </div>
                            <div>
                                <p className=' text-black mb-1'>Date</p>
                                <input className='py-3 mb-3 pl-3 border-none w-[150px]' type="date" placeholder="date" />
                            </div>
                            <div>
                                <p className=' text-black mb-1'>Note</p>
                                <input className='py-3 mb-3 pl-3 border-none w-[150px]' type="text" placeholder="Note" />
                            </div>
                        </div>
                       
                        <div>
                        <Calendar onChange={setDate} value={date} />
                        </div>
                    
                    </div>
                    <div className='pl-8 mt-5 col-span-2 w-10/12 flex justify-between'>
                    <div>
                        <h2 className='text-xl font-bold'>Payment method</h2>
                     </div>
                       
                   </div>
                    <div className='-mb-10 col-span-2 w-10/12 bg-[#F6F6F6]  p-8 flex justify-between'>
                       
                        <div>
                        <div className="form-control">
                        <label className="cursor-pointer label">
                        <span className="label-text">Cash on delivery</span>
                        <input type="checkbox" checked className="checkbox checkbox-info" />
                        </label>
                        </div>
                        </div>
                        <div>
                        <div className="form-control">
                        <label className="cursor-pointer label">
                        <span className="label-text">Pos on delivery</span>
                        <input type="checkbox" checked className="checkbox checkbox-info" />
                        </label>
                        </div>
                        </div>
                        <div>
                        <div className="form-control">
                        <label className="cursor-pointer label">
                        <span className="label-text">Online payment</span>
                        <input type="checkbox" checked className="checkbox checkbox-info" />
                        </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="orderSummery ">
                        <div>
                                <h2 className='mb-5 text-xl'>Order Summary</h2>
                            
                            <div className='flex mb-10 justify-between'>
                               <div className='flex'>
                               <div>
                                    <img className='mr-5 w-[80px]' src={product} alt="" />
                                </div>
                                <div>
                                   <h1 className='text-xl font-bold '>
                                Callflex dolore eiusmod</h1>
                                  
                                   <strong>456.33$</strong>
                                </div>
                               </div>
                               <div>
                                    <button className='bg-white text-black px-5 py-2'>
                                        <div className='flex justify-around'>
                                        <span className='mr-5'>-</span>
                                        <span className='mr-5'>02</span>
                                        <span>+</span>
                                        </div>
                                    </button>
                               </div>
                            </div>
                            <div className='flex mb-10 justify-between'>
                               <div className='flex'>
                               <div>
                                    <img className='mr-5 w-[80px]' src={product2} alt="" />
                                </div>
                                <div>
                                   <h1 className='text-xl font-bold '>
                                Callflex dolore eiusmod</h1>
                                  
                                   <strong>456.33$</strong>
                                </div>
                               </div>
                               <div>
                                    <button className='bg-white text-black px-5 py-2'>
                                        <div className='flex justify-around'>
                                        <span className='mr-5'>-</span>
                                        <span className='mr-5'>02</span>
                                        <span>+</span>
                                        </div>
                                    </button>
                               </div>
                            </div>
                            <div className='flex mb-10 justify-between'>
                               <div className='flex'>
                               <div>
                                    <img className='mr-5 w-[80px]' src={product3} alt="" />
                                </div>
                                <div>
                                   <h1 className='text-xl font-bold '>
                                Callflex dolore eiusmod</h1>
                                  
                                   <strong>456.33$</strong>
                                </div>
                               </div>
                               <div>
                                    <button className='bg-white text-black px-5 py-2'>
                                        <div className='flex justify-around'>
                                        <span className='mr-5'>-</span>
                                        <span className='mr-5'>02</span>
                                        <span>+</span>
                                        </div>
                                    </button>
                               </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;