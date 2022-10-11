import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;

  @media (max-width: 640px) {
    flex-direction: row;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center ;
  padding: 4px 0px 4px 0px ;
  margin-left: 8px;
  cursor: pointer;

  img {
   margin: 0px 8px 0px 0px ;
  }

  span {    
    align-self: center;
    font-family: Poppins;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  }
`;