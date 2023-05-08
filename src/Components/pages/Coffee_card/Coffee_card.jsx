import React from 'react';
import './Coffee_card.css'
import { BsEyeFill } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee_card = ({ coffees , coffee, setCoffee }) => {
    console.log(coffee)
    const { _id, name, chef, photo, price } = coffees;

    const handleDelete= (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed){
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                      console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                    const deleteItem = coffee.filter(del => del._id !== id)
                    setCoffee(deleteItem);
                })
            }
          })

     }


    return (
        <div className='cards_info'>
            <div className='w-[35%]'>
                <img src={photo} alt="" className='w-full' />
            </div>
            <div className='coffee-desc w-[50%]'>
                 <h5><span className='text-[#1B1A1A] font-semibold'>Name: </span>{name}</h5>
                 <h5><span className='text-[#1B1A1A] font-semibold'> Chef: </span>{chef}</h5>
                 <h5><span className='text-[#1B1A1A] font-semibold'>Price: </span>{price} Taka</h5>
            </div>
            <div className='settings w-[15%]'>
                <Link to={`/view/${_id}`}>
                    <BsEyeFill className='rounded-[5px] icons bg-[#D2B48C] text-white cursor-pointer' />
                </Link>
                <Link to={`/edit/${_id}`}>
                  <HiPencil className='rounded-[5px] icons bg-[#3C393B] text-white cursor-pointer' />               
                </Link>
                <Link>
                   <FaTrash onClick={() => handleDelete(_id)} className='rounded-[5px] icons bg-[#EA4744] text-white cursor-pointer' />               
                </Link>
            </div>
        </div>
    );
};

export default Coffee_card;