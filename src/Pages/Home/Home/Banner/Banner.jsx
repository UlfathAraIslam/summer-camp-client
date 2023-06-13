
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/TKRWJt5/pexels-photo-5212695.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/p43pn9Q/pexels-photo-5211446.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/zGGKnG6/pexels-photo-8617967.jpg" />

            </div>
        </Carousel>
    );
};

export default Banner;