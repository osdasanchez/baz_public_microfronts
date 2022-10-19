import * as React from 'react'
import { Container } from './imagen.styles';
// @ts-ignore
import ChicaImagen from '../../../assets/images/home/composition.png'

const Imagen = () => {
    
    return (
        <Container>
            {/*<ChicaImagen />*/}
            <img src={ChicaImagen} />
        </Container>
    )
}

export default Imagen
