import React from 'react'
import { ContainerGreen, Texto } from './imagen.styles';
// @ts-ignore
import Mask from '../../../assets/images/money/Mask_group.svg'

const Imagen = () => {
    return (
        <ContainerGreen>
            <Mask />
            <Texto>Usar baz es súper fácil</Texto>
        </ContainerGreen>
    )
}

export default Imagen
