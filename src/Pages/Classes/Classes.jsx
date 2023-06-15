import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Classes = () => {
    const [classes] = useClasses();
    const {user} = useContext(AuthContext);
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                classes.map((classItem, _id) => (
                    <div key={_id} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={classItem.classImage}className="rounded-xl h-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classItem.className}</h2>
                    <p><span className='text-success'>Instructor:</span> {classItem.instructorName}</p>
                    <p>{classItem.availableSeats}</p>
                    <p>${classItem.price}</p>
                    <Link><button className="btn btn-outline font-bold btn-success">Select</button></Link>
                </div>
               

            </div>
                ))
            }
            
        </section>
    );
};

export default Classes;