import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://b7a12-summer-camp-server-side-ulfath-ara-islam.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`https://b7a12-summer-camp-server-side-ulfath-ara-islam.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
       })

    }
    const handleMakeInstructor = user => {

    }
    return (
        <div>
            <h3 className='text-3xl font-semibold'>Totla users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin role</th>
                            <th>Instructor role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>  <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                user.role === 'admin' ? 'admin' : 
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-green-300"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-sm bg-red-600"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                </td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;