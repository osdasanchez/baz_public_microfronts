import * as React from 'react'
// @ts-ignore
import icon_phone from "../../../assets/images/icono-telefono.svg?url";
// @ts-ignore
import icon_whats from "../../../assets/images/whatsapp_logo.svg?url";
import { ContactContainer, ContactBox } from './telefono.styles';

const Telefono = () => {
  return (
    <ContactContainer>
        <ContactBox>
            <img src={icon_whats} alt="logo" />
            <img src={icon_phone} alt="logo"/>
            <span>55 63 77 44 47</span>
        </ContactBox>
    </ContactContainer>
  )
}

export default Telefono
