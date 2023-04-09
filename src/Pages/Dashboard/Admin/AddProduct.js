import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className="grid md:grid-cols-2 gap-10">
               <div>
               <h2>Product name </h2>
                <div className='mb-3'>
                    <p className=' text-black mb-1'>Product Name</p>
                       <input className='py-3 pl-3 border-none w-full' type="text" placeholder="Product Name" />
                  </div>
                  <div className='flex justify-between mb-3'>
                    <select name="" id="" className='w-3/4 py-3 border-none'>
                        <option value="Select Product Name">Select Product Name</option>
                        <option value="Select Product Name"></option>
                        <option value="Select Product Name"></option>
                        <option value="Select Product Name"></option>
                    </select>
                    <select name="" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="mb-3">
                  <select name="" id="" className='w-3/4 py-3 border-none'>
                        <option value="Select Product Name">Select Product Name</option>
                        <option value="Select Product Name"></option>
                        <option value="Select Product Name"></option>
                        <option value="Select Product Name"></option>
                    </select>
                  </div>
                  <div>
                    <p>Description</p>
                    <textarea className=' my-3 w-full resize-none' name="" id="" cols="30" rows="10"></textarea>
                    <span>Do not exceed 100 characters when entering the products name.</span>
                  </div>
               </div>
               <div>
                <div className="">
                <label>Image 5</label>
                <input type="file" multiple={true} accept="image/*" placeholder="Upload Images"
                className="file-input file-input-black w-full"/>
                 </div>
                 <div className="">
                <label>Image 5</label>
                <input type="file" multiple={true} accept="image/*" placeholder="Upload Images"
                className="file-input file-input-black w-full"/>
                 </div>
                 <div className="">
                <label>Image 5</label>
                <input type="file" multiple={true} accept="image/*" placeholder="Upload Images"
                className="file-input file-input-black w-full"/>
                 </div>
                 <p className='my-3'>
                    You need to add least 4 image . Pay attention to the quality of the pictures you add comply with the backend color standards . Pictures must be in certain dimensions . Notice that the product shows all the details.
                 </p>
                <div className="flex justify-between">
                    <div className='w-full mr-3'>
                        <h2>Add size</h2>
                        <select name="" id="" className='w-full py-3 border-none'>
                        <option value="Select Product Name">Eu-44</option>
                        <option value="Select Product Name">Eu-41</option>
                        <option value="Select Product Name">Eu-43</option>
                       
                    </select>
                    </div>
                   <div className='w-full'>
                    <h2>Product Date</h2>
                    <select name="" id="" className='w-full py-3 border-none'>
                        <option value="Select Product Name">12-04-2023</option>
                        <option value="Select Product Name">12-02-2023</option>
                        <option value="Select Product Name">12-04-2023</option>
                        
                    </select>
                   </div>
                </div>
                <div className='flex justify-between mr-3 mt-5'>
                    <button className='btn btn-accent text-white'>Add Product</button>
                    <button className='btn btn-outline btn-success text-white'>Save Product</button>
                    <button className='btn btn-outline btn-success text-white'>Shedule Product</button>
                </div>

               </div>
            </div>
        </div>
    );
};

export default AddProduct;