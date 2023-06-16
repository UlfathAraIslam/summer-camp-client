import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../hooks/useSelectedClasses';

const Classes = () => {
    const [classes] = useClasses();
    const { _id, className, instructorName, availableSeats, number_of_students, price } = classes;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelectedClasses();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToSelect = (classItem) => {
        console.log('select', classItem);
        if (user && user.email) {
            const selectItem = {
                classId: classItem._id,
                className: classItem.className,
                instructorName: classItem.instructorName,
                availableSeats: classItem.availableSeats, number_of_students: classItem.number_of_students,
                price: classItem.price,
                image: classItem.image,
                email: user.email
            };
            console.log(selectItem);
            fetch('http://localhost:5000/selectedClasses', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'selected course successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to select classes',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })

        }

    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {
                classes.map((classItem, _id) => (
                    <div key={_id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={classItem.classImage} className="rounded-xl h-[400px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classItem.className}</h2>
                            <p><span className='text-success'>Instructor:</span> {classItem.instructorName}</p>
                            <p>{classItem.availableSeats}</p>
                            <p>${classItem.price}</p>

                            <button className="btn btn-outline font-bold btn-success" onClick={() => handleAddToSelect(classItem)}>Select</button>
                        </div>


                    </div>
                ))
            }

        </section>
    );
};

export default Classes;