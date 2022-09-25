import styled from "styled-components";

export const UlBox = styled.ul`
 
  
  /* margin-top: 15px; */
  flex-direction: column;
  display: flex ;
  justify-content: flex-start ;
 


  li {
    font-size: 13px ;
    color: ${props => props.theme.colors.text.light};
    color: white ;
    margin: 0px ;
    padding-bottom: 19px ;
    list-style: none ;
    cursor: pointer;
  }

  li > span {
    color: white ;
  }
`;