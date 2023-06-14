import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);

    useEffect(()=> {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const filteredClasses = data.filter(item => item.category === 'popular');
            const popularClasses = filteredClasses.sort((a, b) => b.number_of_students - a.number_of_students)
            setPopularClass(popularClasses)
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={'Popular Classes'}
            subHeading={'based on the number of student'}
            />
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        {
            popularClass.map((classItem, _id) => (
                <SwiperSlide 
                key={_id}
                >
                    <h3 className=' uppercase bg-opacity-20 bg-success'>{classItem.className}</h3>
                    <img src={classItem.classImage} alt={classItem.className} />
                </SwiperSlide>
            ))
        }
      </Swiper>
        </section>
    );
};

export default PopularClass;