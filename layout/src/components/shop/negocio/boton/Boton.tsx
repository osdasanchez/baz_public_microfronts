import React from 'react'
import { Btn, Container, Logo, Texto } from './boton.styles';

const Boton = ({ logo, nombre }) => {
    return (
        <Container>
            <Btn>
                <Logo src={logo} className='icono' />
            </Btn>
            <Texto>{nombre}</Texto>
        </Container>
    )
}

export default Boton