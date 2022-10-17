import React from 'react'
import { BtnContainer, Container, Nivel1, Nivel2, Nivel3 } from './compras.styles';
import Fondo from './fondo/Fondo';
import Boton from './boton/Boton';
// @ts-ignore
import ofertas from '../../../assets/images/shop/Compras/oferta.svg?url'
// @ts-ignore
import oferta_white from '../../../assets/images/shop/Compras/oferta_white.svg?url'
// @ts-ignore
import ta from '../../../assets/images/shop/Compras/ta.svg?url'
// @ts-ignore
import ta_white from '../../../assets/images/shop/Compras/ta_white.svg?url'
// @ts-ignore
import electronico from '../../../assets/images/shop/Compras/game.svg?url'
// @ts-ignore
import electronico_white from '../../../assets/images/shop/Compras/game_white.svg?url'
// @ts-ignore
import promos from '../../../assets/images/shop/Compras/promo.svg?url'
// @ts-ignore
import promos_white from '../../../assets/images/shop/Compras/promo_white.svg?url'
// @ts-ignore
import mueble from '../../../assets/images/shop/Compras/mueble.svg?url'
// @ts-ignore
import mueble_white from '../../../assets/images/shop/Compras/mueble_white.svg?url'

const Compras = () => {

  const txt_electro = 'Electrónicos';
  const txt_ta = 'Tiempo aire';
  const txt_promos = 'Promociones';
  const txt_oferta = 'Ofertas';
  const txt_mueble = 'baz crédito';

  return (
    <Container>
      <Fondo />

      <BtnContainer>
        <Nivel1>
          <Boton logo={electronico}  nombre={txt_electro} />
        </Nivel1>

        <Nivel2>
          <Boton logo={ta} nombre={txt_ta} />
          <Boton logo={promos} nombre={txt_promos} />
        </Nivel2>

        <Nivel3>
          <Boton logo={ofertas} nombre={txt_oferta} />
          <Boton logo={mueble} nombre={txt_mueble} />
        </Nivel3>
      </BtnContainer>

    </Container>
  )
}

export default Compras