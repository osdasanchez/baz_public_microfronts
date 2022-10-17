import React from 'react'
import { BtnContainer, Container, Nivel1, Nivel2, Nivel3 } from './negocio.styles';
import Fondo from './fondo/Fondo';
import Boton from './boton/Boton';
// @ts-ignore
import venta from '../../../assets/images/shop/Negocio/venta.svg?url'
// @ts-ignore
import zab from '../../../assets/images/shop/Negocio/zab.svg?url'
// @ts-ignore
import qr from '../../../assets/images/shop/Negocio/qr.svg?url'
// @ts-ignore
import chatea from '../../../assets/images/shop/Negocio/msj.svg?url'
// @ts-ignore
import ganancia from '../../../assets/images/shop/Negocio/ganancia.svg?url'

const Negocio = () => {

  const txt_venta = 'Vende en línea';
  const txt_zab = 'Recarga baz';
  const txt_qr = 'Cobra con Qr';
  const txt_chatea = 'Chatea con clientes';
  const txt_ganancia = 'Incrementa tus ganancias';

  return (
    <Container>
      <Fondo />

      <BtnContainer>
        <Nivel1>
          <Boton logo={venta} nombre={txt_venta} />
        </Nivel1>

        <Nivel2>
          <Boton logo={zab} nombre={txt_zab} />
          <Boton logo={qr} nombre={txt_qr} />
        </Nivel2>

        <Nivel3>
          <Boton logo={chatea} nombre={txt_chatea} />
          <Boton logo={ganancia} nombre={txt_ganancia} />
        </Nivel3>
      </BtnContainer>

    </Container>
  )
}

export default Negocio