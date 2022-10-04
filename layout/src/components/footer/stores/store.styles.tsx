import styled from "styled-components";

export const StoresContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    //justify-content: flex-end;
  }
`;

export const QrContainer = styled.div`
    display: flex ;
    justify-content: flex-start;
    align-items: center;
    width: 122px;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      display: none;
    }

    .logo_qr {
      width: 122px;
      height: 122px;
      align-self: center;
      cursor: pointer;
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
      display: none;
      }
    }
`

export const Store = styled.div`
    width: 100%;
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start ;
    column-gap: 10px;
    cursor: pointer;
    
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      flex-direction: row;
      min-height: 64px;
      align-content: center;
      justify-content: center;
      gap: 8px;
    }

    .logo_store {
        width: 107px;
    } 
`

export const ItemStore = styled.span`
    width: 116px;
    height:30px ;
    line-height: 1.23;
    margin:0px ;
    padding: 0px ;

    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #fff;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      display: none;
      width: 0;
      height: 0;
  }
`