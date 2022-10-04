import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 250px;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .globe{
        width: 50%;
        margin-top: 16px;
        margin-right: 25px;
    }

    .imagen{
        width: 75%;
        margin-left: -50px;
    }
`

export const Texto = styled.span`
    font-family: Poppins;
    font-size: 20px;
    width: 209px;
    height: 60px;
    text-align: center;
`