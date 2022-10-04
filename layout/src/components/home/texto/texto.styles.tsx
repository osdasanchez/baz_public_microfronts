import styled from "styled-components";

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

export const Titulo = styled.span`
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