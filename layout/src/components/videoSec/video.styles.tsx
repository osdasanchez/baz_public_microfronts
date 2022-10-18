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
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const FondoContainer = styled.div`
    width: 902px;
    height: 388px;
    background: #0D9CCA;
    border-radius: 388px;

    &:hover {
      animation:1s ease-out 0s 1 ${moveInLeft};
 
  }


  //animation-duration: 5s;
`;

export const VideoImg = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: -40px;

    .img{
        width: 825px;
        height: 464px;
    }
`;

