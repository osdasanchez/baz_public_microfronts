import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 229px;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .globe{
        width: 43%;
        margin-top: 56px;
        margin-right: 10px;
    }

    .imagen{
        width: 80%;
        margin-left: -56px;
    }
`

export const Texto = styled.span`
    font-family: Poppins;
    font-size: 20px;
    width: 209px;
    height: 60px;
    text-align: center;
    margin-top: -27px;
`