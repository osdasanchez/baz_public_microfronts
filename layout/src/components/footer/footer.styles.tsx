import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;
  background-color: #8200FF;
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column ;
  padding-top: 24px ;
  width: 100%;
  gap: 10px;
`;

export const BoxContent = styled.div`
  max-width: 1138px ;
  width:94% ;
  height: 100% ;
  display: flex;
  justify-content: space-between ;
  gap: 60px;
  
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
`;

export const BoxPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start ;
  flex-shrink: 2;
  width: 220px;

  @media (max-width: 768px) {
    order: 2;
  }

  @media (max-width: 640px) {
    width: 60% ;
    order: 3;
  }
`;

export const BoxStores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 2;
  @media (max-width: 768px) {
  //  order: 3;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    flex-grow:2 ;
    order: 4;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 40%;
    flex-grow:2 ;
    order: 3;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const Line = styled.hr`
  max-width: 1232px;
  width: 98% ;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, #ccc, #ac55ff, #ccc);
  margin: 0;
`;

export const OptionLink = styled.a`
  cursor: pointer;
`;