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
        margin-top: 130px;
        margin-left: 65px;
    }
    
    .chico{
        width: 100%;
        height: 100%;
    }

    .corazon{
        margin-top: -155px;
        margin-right: 47px;
    }
`