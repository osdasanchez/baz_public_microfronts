import * as React from 'react'
import { DataContainer, Titulo, Subtitulo, ContenedorBtn } from './data.styles';
import Botones from '../botones/Botones';


const Data = () => {
    return (
        <DataContainer>
            <Titulo>Con baz, tú tienes el control de tu dinero</Titulo>
            <Subtitulo>Envía dinero, paga, cobra o compra ¡sin efectivo! Olvídate de billetes y moneditas</Subtitulo>
            <ContenedorBtn>
                <Botones />
            </ContenedorBtn>
        </DataContainer>
    )
}

export default Data