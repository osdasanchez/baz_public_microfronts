import React from 'react'
import { Container, PrimaryButton, TextButton } from './boton.styles';
// @ts-ignore
import icono from '../../../assets/images/404/icon_home.svg?url'

const Boton = () => {
  return (
    <Container>
        <PrimaryButton>
            <img src={icono} className="home" />
            <TextButton>Ir a inicio</TextButton>
        </PrimaryButton>
    </Container>
  )
}

export default Boton