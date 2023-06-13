import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const PopularClass = () => {
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
        <SwiperSlide>
            <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
            <img src="https://i.ibb.co/p43pn9Q/pexels-photo-5211446.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>conversation </h3>
            <img src="https://i.ibb.co/tp7H4Z6/pexels-photo-8466775.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success' >intermediate </h3>
            <img src="https://i.ibb.co/V3jmtNz/pexels-photo-5211437.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>advance </h3>
            <img src="https://i.ibb.co/V3jmtNz/pexels-photo-5211437.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
            <img src="https://i.ibb.co/ZWgtf5T/pexels-photo-8617956.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
            <img src="https://i.ibb.co/ZWgtf5T/pexels-photo-8617956.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
            <img src="https://i.ibb.co/tp7H4Z6/pexels-photo-8466775.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
        <img src="https://i.ibb.co/V3jmtNz/pexels-photo-5211437.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>
        <h3 className='text-2xl uppercase bg-opacity-20 bg-success'>beginner </h3>
            <img src="https://i.ibb.co/V3jmtNz/pexels-photo-5211437.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default PopularClass;