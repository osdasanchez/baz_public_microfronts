import React from 'react'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_2.svg'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/seguro.svg'
import { Container, Texto } from './seguro.styles'

const Seguro = () => {
    return (
        <Container>
            <Globe1 className="globe" />
            <Imagen1 className="imagen" />
            <Texto>Seguridad para ti y tu dinero</Texto>
        </Container>
    )
}

export default Seguro