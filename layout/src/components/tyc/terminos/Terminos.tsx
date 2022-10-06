import React from 'react'
import Condiciones from '../condiciones/Condiciones'
import { Container, Subtitulo, Titulo } from './terminos.styles'

const Terminos = () => {
    return (
        <Container>
            <Titulo>Terminos y condiciones</Titulo>
            <Subtitulo>Última modificación: 14/2/2021</Subtitulo>
            <Condiciones />
        </Container>
    )
}

export default Terminos
