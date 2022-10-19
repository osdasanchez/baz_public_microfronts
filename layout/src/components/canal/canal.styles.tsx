import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 800px;
`

export const TituloNegro = styled.span`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #1C2833;

    .verde{
        color: #01AD35;
        margin-left: 9px;
    }
`

export const Subtitulo = styled.span`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    color: #1C2833;
`

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1024px;
    height: 500px;
    padding-top: 50px;
`