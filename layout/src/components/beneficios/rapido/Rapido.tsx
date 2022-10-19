import * as  React from 'react'
import { Container, ImgContainer, Texto } from './rapido.styles'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_1.png'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/rapido.svg'

const Rapido = () => {
    return (
        <Container>
            <ImgContainer>
                <img src={Imagen1} className="imagen" />
                <img src={Globe1} className="globe" />
            </ImgContainer>
            <Texto>Enviar y recibir dinero es muy fácil y rápido.</Texto>
        </Container>
    )
}

export default Rapido
