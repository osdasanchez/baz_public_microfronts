import React from 'react'
import { Container, Imagenes } from './fondo.styles';
// @ts-ignore
import fondo1 from '../../../../assets/images/shop/Compras/sparkles.svg?url'
// @ts-ignore
import bolsa from '../../../../assets/images/shop/Compras/bolsa.svg?url'
// @ts-ignore
import etiqueta from '../../../../assets/images/shop/Compras/etiqueta.svg?url'
// @ts-ignore
import chico from '../../../../assets/images/shop/Compras/foto.svg?url'

const Fondo = () => {
    return (
        <Container>
            <img src={fondo1} className="fondo1" />
            <Imagenes>
                <img src={bolsa} className="carita" />
                <img src={chico} className="chico" />
                <img src={etiqueta} className="corazon" />
            </Imagenes>
        </Container>
    )
}

export default Fondo