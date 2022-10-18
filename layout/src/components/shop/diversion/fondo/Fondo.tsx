import React from 'react'
import { Container, Imagenes } from './fondo.styles';
// @ts-ignore
import fondo1 from '../../../../assets/images/shop/Diversion/sparkles.svg'
// @ts-ignore
import carita from '../../../../assets/images/shop/Diversion/emoticon.svg'
// @ts-ignore
import corazon from '../../../../assets/images/shop/Diversion/heart.svg'
// @ts-ignore
import chico from '../../../../assets/images/shop/Diversion/picture_@2x.png'

const Fondo = () => {
    return (
        <Container>
            <img src={fondo1} className="fondo1" />
            <Imagenes>
                <img src={carita} className="carita" />
                <img src={chico} className="chico" />
                <img src={corazon} className="corazon" />
            </Imagenes>
        </Container>
    )
}

export default Fondo