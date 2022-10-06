import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 953px;
    height: 567px;
`

export const TituloVerde = styled.span`
    width: 513px;
    height: 54px;
    left: 383px;
    top: 88px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #01AD35;
    margin-bottom: 50px;

    .negrita{
        font-weight: bold;
    }
`

export const TituloNegro = styled.span`
    width: 513px;
    height: 54px;
    left: 383px;
    top: 88px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #1C2833;
`

export const ContainerUp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    height: 250px;
`

export const ContainerDown = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-start;
    width: 100%;
    height: 250px;
`