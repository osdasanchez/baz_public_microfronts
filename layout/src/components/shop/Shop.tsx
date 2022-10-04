import React from 'react'
import { Container, TituloNegro, TituloVerde } from './shop.styles';

const Shop = () => {
    return (
        <Container>
            <TituloVerde>
                ¡Si tienes <span className='negrita'>baz</span>,
                <TituloNegro> lo tienes todo!</TituloNegro>
            </TituloVerde>
        </Container>
    )
}

export default Shop
