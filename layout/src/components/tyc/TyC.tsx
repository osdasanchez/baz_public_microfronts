import * as React from 'react'
import { Container, ImagenContainer } from './tyc.styles'
import Terminos from './terminos/Terminos'
// @ts-ignore
import ImgVerde from '../../assets/images/tyc/anchor_visual_2.svg'

const TyC = () => {
  return (
    <Container>
      <Terminos />
      <ImagenContainer>
        <ImgVerde className='img' />
      </ImagenContainer>
    </Container>
  )
}

export default TyC
