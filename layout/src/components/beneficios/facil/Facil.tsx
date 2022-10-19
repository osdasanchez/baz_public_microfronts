import * as React from 'react'
// @ts-ignore
import Imagen1 from '../../../assets/images/beneficios/picture_4.png'
// @ts-ignore
import Globe1 from '../../../assets/images/beneficios/facil.svg'
import { Container, Texto } from './facil.styles'

const Facil = () => {
    return (
        <Container>
            {/*<Globe1 className="globe" />*/}
            {/*<Imagen1 />*/}
            <img src={Globe1} className="globe"/>
            <img src={Imagen1} />
            <Texto>Compra en cualquier lado súper fácil</Texto>
        </Container>
    )
}

export default Facil
