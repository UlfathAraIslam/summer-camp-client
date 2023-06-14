import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const PopularInstructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    
    useEffect(()=> {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const filteredClasses = data.filter(item => item.category === 'popular');
            const popularInstructors = filteredClasses.sort((a, b) => b.number_of_students - a.number_of_students)
            setPopularInstructors(popularInstructors)
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={'Popular Instructors'}
            subHeading={'based on the number of students'}
            />
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-10 w-[600px]"
      >
        {
            popularInstructors.map((popularInstructor, _id) => (
                <SwiperSlide 
                key={_id}
                >
                    <h3 className='text-2xl uppercase bg-opacity-20 bg-success  w-[400px]'>{popularInstructor.instructorName}</h3>
                    <img className='w-[400px] h-[300px]' src={popularInstructor.instructorImage} />
                    
                </SwiperSlide>
            ))
        }
      </Swiper>
        </section>
    );
};

export default PopularInstructor;