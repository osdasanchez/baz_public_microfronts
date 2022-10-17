import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 15px 0;

    .btn{
        margin-right: 8px;
    }

    .compras { 
        background: '#ffffff';
    }
    
    .compras:hover { 
        background: #991efa;
    }

    .diversion { 
        background: '#ffffff'; 
    }
    
    .diversion:hover { 
        background: #eb37a0;
    }

    .negocio { 
        background: '#ffffff'; 
    }
    
    .negocio:hover { 
        background: #0d9cca;
    }
`

export const Boton = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 256px;
    height: 48px;
    border: 1px solid black;
    border-radius: 48px;
    cursor: pointer;

    
`

export const Texto = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    text-align: center;
    color: #1C2833;
    cursor: pointer;

    :hover{
        color: white;
    }
`