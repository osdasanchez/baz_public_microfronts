import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 294px;
    height: 253px;
    margin-right: 97px;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .globe{
        width: 50%;
        margin-top: -63px;
        margin-right: 28px;
    }

    .imagen{
        width: 75%;
        margin-left: -50px;
    }
`

export const Texto = styled.span`
    font-family: Poppins;
    font-size: 18px;
    width: 300px;
    height: 90px;
    margin-left: 65px;
    text-align: center;
`