import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes] = useClasses();
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
                    <button className="btn btn-outline font-bold btn-success">Select</button>
                </div>
               

            </div>
                ))
            }
            
        </section>
    );
};

export default Classes;