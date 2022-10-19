import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 250px;
    height: 50px;
    left: 0px;
    top: 0px;
    border: 1px solid #1C2833;
    border-radius: 24px;
    cursor: pointer;

    :hover{
        background-color: #e2f1da;
        color: #01AD35;
    }
`

export const Icon = styled.span`
    display: flex;
    width: 24px;
    height: 24px;
`

export const Texto = styled.span`
    display: flex;
    align-items: center;
    width: auto;
    height: 21px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1C2833;

    :hover{
        background-color: #e2f1da;
        color: #01AD35;
    }
`