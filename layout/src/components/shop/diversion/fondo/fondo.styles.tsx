import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .fondo1{
        position: absolute;
    }
`

export const Imagenes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;

    .carita{
        width: 51px;
        height: 51px;
        margin-top: 125px;
        margin-left: 125px;
    }
    
    .chico{
        width: 304px;
        height: 377px;
    }

    .corazon{
        margin-top: -155px;
        margin-right: 47px;
    }
`