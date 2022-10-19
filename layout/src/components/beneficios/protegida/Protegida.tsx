import * as  React from 'react'
import { Container, ImgContainer, Texto } from './protegida.styles'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_5.png'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/protegida.svg'

const Protegida = () => {
    return (
        <Container>
            <ImgContainer>
                <img src={Globe1} className="globe" />
                <img src={Imagen1} className="imagen" />
            </ImgContainer>
            <Texto>Ya puedes comprar todo en un mismo lugar y al mismo tiempo. ¡Es súper fácil!.</Texto>
        </Container>
    )
}

export default Protegida
