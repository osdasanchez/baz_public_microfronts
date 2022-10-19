import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 1024px;
    height: 860px;
`

export const TituloVerde = styled.span`
    width: 513px;
    height: 54px;
    margin-bottom: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #01AD35;

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

export const Descripcion = styled.span`
    width: 718px;
    height: 54px;
    left: 383px;
    top: 88px;
    font-family: 'Poppins';
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #1C2833;
`

export const ChipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 890px;
    margin-top: 50px;
`