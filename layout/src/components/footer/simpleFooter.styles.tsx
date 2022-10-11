import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  background-color: #8200FF;
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 24px;
  width: 100%;
  gap: 10px;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1138px;
  width: 94%;
  height: 100%;
  
  @media (max-width: 768px) {
    flex-wrap: wrap-reverse ;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap ;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 30px;
  width: auto;
  
  @media (max-width: 768px) {
    width:100%;
    order: 4;
  }

  @media (max-width: 640px) {
    width: 100%;
    order: 1;
  }

  .logo {
    width: 140px;
    max-height: 62px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 72px;
      max-height: 32px;
    } 
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  margin-left: 50px;
  margin-right: 48px;

  @media (max-width: 768px) {
    order: 1;
  }
  
  @media (max-width: 640px) {
    order: 2;
    width: 100%;
    align-items: center;
  }
`;

export const BoxQr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;

  @media (max-width: 768px) {
    order: 1;
  }
  
  @media (max-width: 640px) {
    order: 2;
    width: 100%;
    align-items: center;
  }
`

export const BoxCopy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-left: 660px;
`

export const Aclaracion = styled.span`
  font-family: Poppins;
  font-style: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: white;
  width: auto;
  margin-bottom: 10px;
`

export const Aviso = styled.span`
  font-family: Poppins;
  font-style: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: white;
  width: 295px;
  margin-bottom: 10px;
`