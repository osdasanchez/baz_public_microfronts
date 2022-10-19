import * as React from 'react'
import { Container } from './imagen.styles';
// @ts-ignore
import fondo from '../../../assets/images/404/sparkles.svg?url'
// @ts-ignore
import foto from '../../../assets/images/404/illustration.svg?url'

const Imagen = () => {
  return (
    <Container>
        <img src={fondo} className="fondo" />
        <img src={foto} className="foto" />
    </Container>
  )
}

export default Imagen