import React from 'react';
import './Add_product.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Add_product = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
       event.preventDefault();
       const form       = event.target;
       const name       = form.name.value;
       const chef       = form.chef.value;
       const supplier   = form.supplier.value;
       const taste      = form.taste.value;
       const category   = form.category.value;
       const details    = form.details.value;
       const photo      = form.photo.value;
       const price      = form.price.value;
       const full_form = {name, chef, supplier, taste, category, details, photo, price}
       console.log(full_form)

       fetch("http://localhost:3000/coffees", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(full_form)
       })
       .then(res => res.json())
       .then(data => {
           console.log(data)

           if(data.insertedId){
              Swal.fire({
                icon: 'success',
                title: 'successful Added new item',
                // text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
           }
           form.reset(); 
           navigate("/");
       })
    }

    
    return (
        <div className='add-section'>
            <div className='main-container'>
                <Link to="/" className='flex items-center cursor-pointer mb-16'>
                    <AiOutlineArrowLeft className='mr-4 text-[#331A15] text-lg' />
                    <span className='back_home'>Back to home</span>
                </Link>

                <div className='form-section'>
                    <h1>Add New Coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    {/* className='grid grid-cols-2 gap-8' */}
                        <form action="" onSubmit={ handleSubmit }>
                            <div className='flex lg:flex-row flex-col items-center justify-between gap-7 mb-4 '>
                                <div className=' input-field lg:w-1/2 w-full'>
                                    <label className=''>Name</label>
                                    <input type="text" name="name" placeholder='Enter coffee name' className='input-formBox' />
                                </div>
                                <div className='input-field lg:w-1/2 w-full'>
                                    <label >Chef</label>
                                    <input type="text" name="chef" placeholder='Enter coffee chef' className='input-formBox' />
                                </div>
                            </div>

                            <div className='flex lg:flex-row flex-col items-center justify-between gap-7 mb-4 '>
                                <div className=' input-field lg:w-1/2 w-full'>
                                    <label className=''>Supplier</label>
                                    <input type="text" name="supplier" placeholder='Enter coffee supplier' className='input-formBox' />
                                </div>
                                <div className='input-field lg:w-1/2 w-full'>
                                    <label >Taste</label>
                                    <input type="text" name="taste" placeholder='Enter coffee taste' className='input-formBox' />
                                </div>
                            </div>

                            <div className='flex lg:flex-row flex-col items-center justify-between gap-7 mb-4 '>
                                <div className=' input-field lg:w-1/2 w-full'>
                                    <label className=''>Category</label>
                                    <input type="text" name="category" placeholder='Enter coffee category' className='input-formBox' />
                                </div>
                                <div className='input-field lg:w-1/2 w-full'>
                                    <label >Details</label>
                                    <input type="text" name="details" placeholder='Enter coffee details' className='input-formBox' />
                                </div>
                            </div>

                            <div className='flex lg:flex-row flex-col items-center justify-between gap-7 mb-8 '>
                                <div className=' input-field w-full'>
                                    <label className=''>Photo</label>
                                    <input type="text" name="photo" placeholder='Enter photo URL' className='input-formBox' />
                                </div>
                                <div className=' input-field w-full'>
                                    <label className=''>Price</label>
                                    <input type="text" name="price" placeholder='Enter coffee price' className='input-formBox' />
                                </div>
                            </div>

                            <div className='text-center block'>
                                <button className='btn-add-item'>add coffee</button>
                            </div>

                        </form>
                </div>
            </div>
        </div>
    );
};

export default Add_product;