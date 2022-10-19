import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    width: 275px;
    height: 229px;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .imagen{
        width: 73%;
        margin-left: -8px;
    }

    .globe{
        width: 35%;
        margin-left: -7px;
        margin-top: -60px;
    }
`

export const Texto = styled.span`
    font-family: Poppins;
    font-size: 19px;
    width: 250px;
    height: 60px;
    text-align: center;
    margin-top: -27px;
`