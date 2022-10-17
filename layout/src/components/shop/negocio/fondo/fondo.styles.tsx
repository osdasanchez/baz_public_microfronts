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
        width: 70px;
        height: 91px;
        margin-top: 35px;
        margin-left: 30px;
    }
    
    .chico{
        width: 100%;
        height: 100%;
        margin-top: 50px;
    }

    .corazon{
        width: 93px;
        height: 31px;
        margin-top: 215px;
    }
`