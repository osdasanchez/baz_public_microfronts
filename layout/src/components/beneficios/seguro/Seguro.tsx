import * as React from 'react'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_2.png'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/seguro.svg'
import { Container, Texto } from './seguro.styles'

const Seguro = () => {
    return (
        <Container>
            <img    src={Globe1} className="globe"/>
            <img    src={Imagen1}  className="imagen"/>
            <Texto>10 de 10, tiene muchos beneficios, realizo mis pagos de manera segura</Texto>
        </Container>
    )
}

export default Seguro
