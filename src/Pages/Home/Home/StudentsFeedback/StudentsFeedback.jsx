import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const StudentsFeedback = () => {
    const [show, setShow] = useState(false);

    const feedbacks = [
        'The class was amazing!',
        'The instructor was very knowledgeable.',
        'I learned a lot in this course.',
        'Highly recommended!',
        'Great experience overall.',
    ]
    const trail = useTrail(feedbacks.length, {
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        from: { opacity: 0, transform: 'translateY(20px)' },
    });
    return (
        <div className='text-center'>

            <SectionTitle
            heading={'Students Feedback'}
            
            />

            <div className='bg-success font-bold rounded p-3'>
            <button className='text-3xl mb-4' onClick={() => setShow(!show)}>Click here to know the
            <br /> <span className='border-y-4 uppercase'>Feedback</span></button>
            <div className='text-black-700'>
            {
                trail.map((props, index) => (
                    <animated.div className='mb-4' key={index} style={props}>
                        <p>{feedbacks[index]}</p>
                    </animated.div>
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default StudentsFeedback;