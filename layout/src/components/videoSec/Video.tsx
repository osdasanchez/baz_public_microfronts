import React from 'react'
import { Container, FondoContainer, FondoLateral, VideoContainer, VideoImg } from './video.styles'
// @ts-ignore
import VideoImga from '../../assets/images/video/baz-paga-todo-sin-efectivo 1.svg'
// @ts-ignore
import LateralImg from "../../assets/images/video/anchor_visual_1.svg"

const Video = () => {
    return (
        <Container>
            <FondoLateral>
                <LateralImg />
            </FondoLateral>
            <VideoContainer>
                <FondoContainer>
                    <VideoImg>
                        <VideoImga className='img' />
                    </VideoImg>
                </FondoContainer>
            </VideoContainer>
        </Container>
    )
}

export default Video
