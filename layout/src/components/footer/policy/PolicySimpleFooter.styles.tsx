import styled from "styled-components";

export const UlBox = styled.ul`
    height: auto ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
li {
    list-style: none ;
    color: ${props => props.theme.colors.text.light};
    color: white ;
    cursor: pointer;
    
    
  }
  li > span {
            color: ${props => props.theme.colors.link.text.primary};
            font-size: ${props => props.theme.font.size.small};
            margin: 0 ;
            padding: 0 ;
           font-weight: 500;
            @media screen and (max-width: 390px) {
                font-size: ${props => props.theme.font.size.xs};
            } 

        }
`;