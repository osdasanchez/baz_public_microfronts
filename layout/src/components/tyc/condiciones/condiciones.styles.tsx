import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 720px;
    padding: 5px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const Parrafo = styled.span`
    font-family: Poppins;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color:#1C2833;
    margin-bottom: 15px;
`

export const Titulo = styled.span`
    font-family: Poppins;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    text-align: left;
    color:#1C2833;
    padding: 15px 0;
`

export const OL = styled.ol`
    margin-top: 25px;
`

export const LI = styled.li`
    font-family: Poppins;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color:#1C2833;
    margin-bottom: 8px;
`

export const UL = styled.ul`
    margin-top: 25px;
`