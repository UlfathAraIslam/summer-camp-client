import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PopularClass = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
    );
};

export default PopularClass;