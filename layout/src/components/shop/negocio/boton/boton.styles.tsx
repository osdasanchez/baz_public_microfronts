import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: auto;
`

export const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 2px 3px rgba(5, 6, 9, 0.115357);

    :hover{
        background-color: #0d9cca;
    }
`

export const Logo = styled.img`
    width: 25px;
    height: 26px;
`

export const Texto = styled.span`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #222E41;
    margin-top: 8px;
`