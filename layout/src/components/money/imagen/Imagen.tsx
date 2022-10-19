import * as React from 'react'
import { ContainerGreen, Texto } from './imagen.styles';
// @ts-ignore
import Mask from '../../../assets/images/money/Mask_group.svg'

const Imagen = () => {
    return (
        <ContainerGreen>
            <video controls  autoPlay muted width={'270px'} height={'480px'}>
                <source src="https://baz-public-web-assets.s3.amazonaws.com/videos/tutorial/9-16+-+1+%C2%BFC%C3%B3mo+pagar+por+cercan%C3%ADa.mp4" type="video/mp4" />
            </video>
            {/* <Texto>Usar baz es súper fácil</Texto> */}
        </ContainerGreen>
    )
}

export default Imagen
