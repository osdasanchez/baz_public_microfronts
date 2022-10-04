import React from 'react'
import { Container, ImgContainer, Texto } from './rapido.styles'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_1.svg'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/rapido.svg'

const Rapido = () => {
    return (
        <Container>
            <ImgContainer>
                <Imagen1 className="imagen" />
                <Globe1 className="globe" />
            </ImgContainer>
            <Texto>Recibe tu dinero súper rápido</Texto>
        </Container>
    )
}

export default Rapido
