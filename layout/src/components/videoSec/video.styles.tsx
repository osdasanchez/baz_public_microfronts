import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 563px;
    margin-left: -57px;
    gap: 50px;
`

export const FondoLateral = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    margin-top: -65px;
`

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
`

const moveInLeft = keyframes`
  0% {
    opacity: 1;
    transform: translate(100px, 100px);
   
  }
  
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 1;
    transform: translate(100px, -100px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const FondoContainer = styled.div`
    width: 902px;
    height: 388px;
    background: #0D9CCA;
    border-radius: 388px;
    animation: ${moveInLeft} 500ms linear 0s 1 ;

  //animation-name: example;
  //animation-duration: 5s;
  //animation-timing-function: linear;
  //animation-delay: 2s;
  //animation-iteration-count: infinite;
  //animation-direction: alternate;
 
  


  //animation-duration: 5s;
`;

export const VideoImg = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: -40px;
  animation:  ${moveInRight} 500ms linear 0s 1;

    .img{
        width: 825px;
        height: 464px;
    }
`;

