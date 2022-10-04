import React from 'react'
import { Container, Titulo, Subheader, ImgContainer } from './texto.styles';
// @ts-ignore
import GoogleIcon from '../../../assets/images/google-play.svg'
// @ts-ignore
import AppleIcon from '../../../assets/images/group-2-copy-2.svg'


const Texto = () => {
  return (
    <Container>
      <Titulo>Compra</Titulo>
      <Subheader>Todo lo que necesitas en una <span className='negrita'>sola app</span></Subheader>
      <ImgContainer>
        <GoogleIcon />
        <AppleIcon />
      </ImgContainer>
    </Container>
  )
}

export default Texto
