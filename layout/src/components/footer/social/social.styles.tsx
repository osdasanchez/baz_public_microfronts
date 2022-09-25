import styled from "styled-components";

export const SocialBox = styled.ul`
  /* width: 100%; */
  display: flex ;
  justify-content:flex-start;
  gap: 16px;
 
  @media (max-width: 640px) {
    gap: 24px;
  }
  li {
    margin: 0px ;
    padding: 0px;
    list-style: none ;
    
  }
`;