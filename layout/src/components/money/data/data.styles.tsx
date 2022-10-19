import styled from "styled-components";

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    width: 781px;
    margin-left: 65px;
`

export const Titulo = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    width: 100%;
    color: #01AD35;
`

export const Subtitulo = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    width: 100%;
    color: #1C2833;
    margin-top: 25px;
`

export const ContenedorBtn = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    width: 500px;
    margin-top: 35px;
    gap: 20px 128px;
`