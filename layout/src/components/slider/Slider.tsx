// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Mousewheel, Parallax } from 'swiper';

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
            style={{
                "--swiper-navigation-color": "#01AD35",
                "--swiper-pagination-color": "#01AD35",
            }}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={10}
            speed={600}
            parallax={true}
            hashNavigation={{
                watchState: true,
            }}
            //mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Scrollbar, Parallax]}
            //spaceBetween={50}
           // slidesPerView={3}
           // navigation
            pagination={{ clickable: true, type: 'bullets' }}
            //scrollbar={{ draggable: true }}
            onScroll={(swiper, event) => console.log(swiper, event)}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper"
        >
            <SwiperSlide data-hash="slide1">  <HomeSection/></SwiperSlide>
            <SwiperSlide data-hash="slide2">
                {({ isActive }) => (
                   <>{isActive ? <Video /> : null}</>
                )}
            </SwiperSlide>
            <SwiperSlide data-hash="slide3"><Money /></SwiperSlide>
            <SwiperSlide data-hash="slide4"><Shop /></SwiperSlide>
            <SwiperSlide data-hash="slide5"><Beneficios /></SwiperSlide>
            <SwiperSlide data-hash="slide6">
                {({ isActive }) => (
                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                )}
            </SwiperSlide>
            <SwiperSlide data-hash="slide7">
                <div>
                    <Faq />
                    <Footer />
                </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default Slider;