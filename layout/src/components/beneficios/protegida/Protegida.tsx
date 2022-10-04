import React from 'react'
import { Container, ImgContainer, Texto } from './protegida.styles'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_5.svg'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/protegida.svg'

const Protegida = () => {
    return (
        <Container>
            <ImgContainer>
                <Globe1 className="globe" />
                <Imagen1 className="imagen" />
            </ImgContainer>
            <Texto>Tus datos están siempre protegidos</Texto>
        </Container>
    )
}

export default Protegida
