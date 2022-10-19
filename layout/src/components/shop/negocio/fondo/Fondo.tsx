import React from 'react'
import { Container, Imagenes } from './fondo.styles';
// @ts-ignore
import fondo1 from '../../../../assets/images/shop/Negocio/sparkles.svg?url'
// @ts-ignore
import carrito from '../../../../assets/images/shop/Negocio/carrito.svg?url'
// @ts-ignore
import cajas from '../../../../assets/images/shop/Negocio/cajas.svg?url'
// @ts-ignore
import chico from '../../../../assets/images/shop/Negocio/foto.png'

const Fondo = () => {
    return (
        <Container>
            <img src={fondo1} className="fondo1" />
            <Imagenes>
                <img src={carrito} className="carita" />
                <img src={chico} className="chico" />
                <img src={cajas} className="corazon" />
            </Imagenes>
        </Container>
    )
}

export default Fondo