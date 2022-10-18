import * as React from 'react'
import { DataContainer, Titulo, Subtitulo, ContenedorBtn } from './data.styles';
import Botones from '../botones/Botones';


const Data = () => {
    return (
        <DataContainer>
            <Titulo>Envía, cobra, recarga,</Titulo>
            <Subtitulo>Compra ¡sin efectivo! Olvídate de billetes y moneditas</Subtitulo>
            <ContenedorBtn>
                <Botones />
            </ContenedorBtn>
        </DataContainer>
    )
}

export default Data