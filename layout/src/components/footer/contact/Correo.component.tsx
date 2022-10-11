import React from 'react'
// @ts-ignore
import icon_email from "../../../assets/images/icono-correo.svg?url";
import { ContactContainer, ContactBox } from './telefono.styles';

const Correo = () => {
  return (
    <ContactContainer>
        <ContactBox>
            <img src={icon_email} alt="logo"/>
            <span>ayuda@baz.app </span>
        </ContactBox>
    </ContactContainer>
  )
}

export default Correo
