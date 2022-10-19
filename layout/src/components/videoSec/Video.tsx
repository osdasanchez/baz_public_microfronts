import * as React from 'react'
import { Container, FondoContainer, FondoLateral, VideoContainer, VideoImg } from './video.styles'
// @ts-ignore
import VideoImga from '../../assets/images/video/baz-paga-todo-sin-efectivo 1.svg'
// @ts-ignore
import LateralImg from "../../assets/images/video/anchor_visual_1.svg"

const Video = () => {
    return (
        <Container>
            <FondoLateral>
                {/*<LateralImg />*/}
                <img src={LateralImg}/>
            </FondoLateral>
            <VideoContainer>
                <FondoContainer className={"fondo"}>
                    <VideoImg>
                        {/*<VideoImga className='img' />*/}
                        {/*<img src={VideoImga}/>*/}
                        <video controls  autoPlay={true} width={'650px'} height={'400px'}>
                            <source src="https://baz-public-web-assets.s3.amazonaws.com/videos/tutorial/main/WIDE+-+10+Todo+lo+que+puedes+hacer+con+baz.mp4" type="video/mp4" />

                        </video>
                    </VideoImg>
                </FondoContainer>
            </VideoContainer>
        </Container>
    )
}

export default Video
