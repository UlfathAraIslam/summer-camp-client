import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import StudentsFeedback from '../StudentsFeedback/StudentsFeedback';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClass/>
            <PopularInstructor/>
            <StudentsFeedback/>
        </div>
    );
};

export default Home;