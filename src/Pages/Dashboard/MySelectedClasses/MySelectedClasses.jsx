import React from 'react';
import useSelectedClasses from '../../../hooks/useSelectedClasses';
import {FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses();
    console.log(selectedClasses);

    const total = selectedClasses.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/selectedClasses/${item._id}`, {
                method: 'DELETE',
                })
              .then(res => res.json())
              .then(data =>{
                if (data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your class has been deleted.',
                        'success'
                      )
                }
              } )
            }
          })
          
    }

    return (
        <div>
            <div className='uppercase font-semibold h-10 flex justify-evenly'>
                <h2>Total selected classes: {selectedClasses.length}</h2>
                <h2>Total Price: ${total}</h2>
                <button className='btn btn-success btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image || ''}/>
                                            </div>
                                        </div>
                                </td>
                                <td>
                                   {item.className}
                                </td>
                                <td>{item.instructorName}</td>
                                <td className='text-end'>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;