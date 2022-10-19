import styled, {css, keyframes} from 'styled-components';
import {bounce, headShake, pulse, zoomIn, fadeInDown, fadeInUp} from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;
const bounceAnimation = keyframes`${bounce}`;
const pulseAnimation = keyframes`${pulse}`;
const headShakeAnimation = keyframes`${headShake}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const animationFadeInDown = keyframes`${fadeInDown}`;
const animation = keyframes`
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  //66.64%,79.3% {transform:translate3d(0,-50%,0);}
//  83.3%,95.96% {transform:translate3d(0,-25%,0);}
`;

export const topToBottom = keyframes`    
    0% {
      opacity: 0;
    } 
  5% {  
        opacity: 0;
        transform: translateY(50px);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
  25% {
    opacity: 0;
    transform: translateY(0);
  }
  30% {
    opacity: 0;
    transform: translateY(-50px);
  }
  80% {
    opacity: 0;
   // transform: translateY(0);
  }
  100% {
    opacity: 0;
    //transform: translateY(0);
  }
    
  `;

export const topToBottom2 = keyframes`
  0% {
    opacity: 0;
  }

    10% {
      opacity: 1;
        transform: translateY(-112%);
    }
  25% {
    opacity: 1;
    transform: translateY(-100%);
  }
  35% {
    opacity: 1;
    transform: translateY(-212%);
  }
  50% {
    opacity: 1;
    transform: translateY(-200%);
  }
  60% {
    opacity: 1;
    transform: translateY(-312%);
  }
  75% {
    opacity: 1;
    transform: translateY(-300%);
  }
  85% {
    opacity: 1;
    transform: translateY(-412%);
  }
  100% {
    opacity: 0;
    transform: translateY(-400%);
  }


`;

export const topToBottom3 = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 0;
    transform: translateY(0);
  }
  30% {
    opacity: 0;
    transform: translateY(-50px);
  }
  80% {
    opacity: 0;
    // transform: translateY(0);
  }
  100% {
    opacity: 0;
    //transform: translateY(0);
  }
    
  `;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    width: 440px;
    height: 386px;
    margin-top: 20px;
`

export const ContentContainer = styled.div`
  position: relative;
 // transform: translate(-50%, -50%);
  //overflow:hidden;
`;

export const ContentContainerList = styled.div`
  //margin-top: 0;
  //padding-left: 110px;
 // text-align: left;
  //list-style: none;
  //display: inline;

  //display: inline;
  //text-indent: 8px;

  //-webkit-animation-name: change;
  //-webkit-animation-duration: 10s;
  //-webkit-animation-iteration-count: infinite;
  //animation-name: change;
  //animation-duration: 10s;
  //animation-iteration-count: infinite;

  .slidingVertical {
    //overflow: hidden;
    display: inline;
    text-indent: 8px;


  }

  .slidingVertical span {
    animation: ${topToBottom3} 15s linear infinite 1s;
      //animation: ${topToBottom2} 6s  infinite;
    font-family: Poppins;
    font-size: 64px;
    font-weight: 700;
    //line-height: 76.8px;
    //display: block;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 550px;
    margin-top: -60px;
    margin-left: -5px;
  }
  

    .slidingVertical span:nth-child(2) {
    animation-delay: 2.5s;
  }
    .slidingVertical span:nth-child(3) {
    animation-delay: 5s;
  }
    .slidingVertical span:nth-child(4) {
    animation-delay: 7.5s;
  }
    .slidingVertical span:nth-child(5) {
    animation-delay: 10s;
  }

  .slidingVertical span:nth-child(6) {
    animation-delay: 12.5s;
  }


`;

export const ContentContainerListItem = styled.span`

  animation: ${topToBottom} 5s linear infinite 0s;
  overflow: hidden;
  position: absolute;
 

`;

export const Titulo = styled.span`
  display: inline-block;
    font-family: Poppins;
    font-size: 64px;
    font-weight: 700;
    line-height: 76.8px;


`

export const Subheader = styled.span`
    font-family: Poppins;
    font-size: 32px;
    line-height: 48px;
    color: #858C94;

    .negrita{
        font-weight: bold;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 32px;
`