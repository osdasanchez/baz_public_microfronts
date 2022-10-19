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
            <VideoContainer>
                <Swiper
                    effect={"coverflow"}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 10,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper-principal"
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

            </VideoContainer>
        </Container>
    )
}

export default Canal