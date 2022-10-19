// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "./styles.scss";
import HomeSection from "../home-section/HomeSection";
import Video from "../videoSec/Video";
import Money from "../money/Money";
import Faq from "../faq/Faq";
import * as React from "react";
import Footer from "../footer/Footer";
import Shop from "../shop/Shop";
import Beneficios from "../beneficios/Beneficios";

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={10}
            //mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Scrollbar]}
            //spaceBetween={50}
           // slidesPerView={3}
           // navigation
            pagination={{ clickable: true, type: 'bullets' }}
            //scrollbar={{ draggable: true }}
            onScroll={(swiper, event) => console.log(swiper, event)}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>  <HomeSection/></SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                   <>{isActive ? <Video /> : null}</>
                )}
            </SwiperSlide>
            <SwiperSlide><Money /></SwiperSlide>
            <SwiperSlide><Shop /></SwiperSlide>
            <SwiperSlide><Beneficios /></SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                )}
            </SwiperSlide>
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