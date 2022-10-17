import React from 'react'
import { Container, Boton, Texto } from './chips.styles';
// @ts-ignore
import car_black from '../../../assets/images/shop/Compras/icono_black.svg?url'
// @ts-ignore
import car_white from '../../../assets/images/shop/Compras/icono_white.svg?url'
// @ts-ignore
import cara_black from '../../../assets/images/shop/Diversion/carita_black.svg?url'
// @ts-ignore
import cara_white from '../../../assets/images/shop/Diversion/carita_white.svg?url'
// @ts-ignore
import shape_black from '../../../assets/images/shop/Negocio/Shape_black.svg?url'
// @ts-ignore
import shape_white from '../../../assets/images/shop/Negocio/Shape_white.svg?url'

const Chips = () => {

  return (
    <Container>
      <Boton className='compras'>
        <img src={car_black} className="btn" />
        <Texto>Compras</Texto>
      </Boton>
      <Boton className='diversion'>
        <img src={cara_black} className="btn" />
        <Texto>Diversión</Texto>
      </Boton>
      <Boton className='negocio'>
        <img src={shape_black} className="btn" />
        <Texto>Negocio</Texto>
      </Boton>
    </Container>
  )
}

export default Chips