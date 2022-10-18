// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./styles.css";
import HomeSection from "../home-section/HomeSection";
import Video from "../videoSec/Video";
import Money from "../money/Money";
import Faq from "../faq/Faq";
import * as React from "react";
import Footer from "../footer/Footer";

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={10}
            mousewheel={false}
            modules={[Navigation, Pagination, Mousewheel, Scrollbar]}
            //spaceBetween={50}
           // slidesPerView={3}
           // navigation
            pagination={{ clickable: true, type: 'bullets' }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>  <HomeSection/></SwiperSlide>
            <SwiperSlide>   <Video /></SwiperSlide>
            <SwiperSlide><Money /></SwiperSlide>
            <SwiperSlide>
                <div>
                    <Faq />
                    <Footer />
                </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default Slider;