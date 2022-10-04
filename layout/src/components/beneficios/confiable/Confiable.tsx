import React from 'react'
import { Container, ImgContainer, Texto } from './confiable.styles'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_3.svg'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/confiable.svg'

const Confiable = () => {
    return (
        <Container>
            <ImgContainer>
                <Globe1 className="globe" />
                <Imagen1 className="imagen" />
            </ImgContainer>
            <Texto>Solo tú tienes el control de tu dinero</Texto>
        </Container>
    )
}

export default Confiable
