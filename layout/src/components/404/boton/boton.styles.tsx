import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .home{
        width: 24px;
        height: 24px;
    }
`

export const PrimaryButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 64px;
    gap: 8px;
    width: 156px;
    height: 35px;
    left: 524px;
    top: 563px;
    background: #01AD35;
    border-radius: 24px;
`

export const TextButton = styled.span`
    display: flex;
    align-items: center;
    text-align: center;
    width: 73px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`