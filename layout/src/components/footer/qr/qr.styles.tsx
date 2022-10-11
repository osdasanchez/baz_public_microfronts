import styled from "styled-components";

export const QrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;

  @media (max-width: 640px) {
    flex-direction: row;
  }
`;

export const QrBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  padding: 4px 0px 4px 0px ;
  margin-left: 8px;
  cursor: pointer;

  img {
   margin: 0px 8px 0px 0px ;
  }
`;

export const TextoQr = styled.span`
    width: 127px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    font-style: bold;
    line-height: 24px;
    text-align: left;
    color: white;
    margin-top: 40px;
    margin-left: 16px;
`