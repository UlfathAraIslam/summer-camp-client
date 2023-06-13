import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center mb-10 border-y-4 py-4 md:w-3/12'>
            <p className='text-4xl text-green-300'>{heading}</p>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;