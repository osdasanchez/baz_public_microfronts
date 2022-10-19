import React, { useState } from 'react'
import { Container, Subtitulo, TituloNegro, VideoContainer } from './canal.styles';
// import CardVideo from './card-video/Card-video';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import { EffectCoverflow, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

// @ts-ignore
import canalBaz from '../../assets/images/canal/main_clip.png'
// @ts-ignore
import videoLat1 from '../../assets/images/canal/paused_clip_2.png'
// @ts-ignore
import videoLat2 from '../../assets/images/canal/paused_clip_3.png'

const Canal = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <Container>
            <TituloNegro>Canal <span className='verde'> baz</span></TituloNegro>
            <Subtitulo>¡Conoce todo lo que puedes hacer con tu súperapp!</Subtitulo>
            {/* <VideoContainer>
                <Swiper
                    effect={"creative"}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    // coverflowEffect={{
                    //     rotate: 60,
                    //     stretch: 10,
                    //     depth: 50,
                    //     modifier: 1,
                    //     slideShadows: true,
                    // }}
                    creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -400],
                        },
                        next: {
                          translate: ["100%", 0, 0],
                        },
                      }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={canalBaz} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={videoLat1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={videoLat2} />
                    </SwiperSlide>
                </Swiper>

            </VideoContainer> */}
        </Container>
    )
}

export default Canal