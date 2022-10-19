import * as React from 'react'
import { BoxContent, BoxLogo, BoxSocial, FooterContainer, FooterWrapper, LogoContainer, BoxQr, BoxCopy, Aviso, Aclaracion } from './simpleFooter.styles';
// @ts-ignore
import BazLogo from "../../assets/images/logo-desktop.svg";
import SocialMedia from './social/social.component';
import { Line } from './footer.styles';
import Copy from './copy/copy.component';
import Correo from './contact/Correo.component';
import Telefono from './contact/Telefono.component';
import Qr from './qr/qr.component';

const SimpleFooter = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <BoxContent>
          <BoxLogo>
            <LogoContainer>
              <img src={BazLogo} className='logo'/>
            </LogoContainer>
          </BoxLogo>

          <BoxSocial>
            <SocialMedia />
            <Correo />
            <Telefono />
          </BoxSocial>

          <BoxQr>
            <Qr />
          </BoxQr>
        </BoxContent>

        <Line />

        <BoxCopy>
          <Copy />
          <Aclaracion>Aclaraciones</Aclaracion>
          <Aviso>Aviso de Privacidad</Aviso>
        </BoxCopy>

      </FooterWrapper>
    </FooterContainer>
  )
}

export default SimpleFooter
