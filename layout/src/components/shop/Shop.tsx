
import * as React from 'react'
import Chips from './chips/Chips';
import { ChipContainer, Container, Descripcion, TituloNegro, TituloVerde } from './shop.styles';
import Compras from './compras/Compras';
import Diversion from './diversion/Diversion';
import Negocio from './negocio/Negocio';


const Shop = () => {
    return (
        <Container>
            <TituloVerde>
                ¡Si tienes <span className='negrita'>baz</span>,
                <TituloNegro> lo tienes todo!</TituloNegro>
            </TituloVerde>
            <Descripcion>Puedes solicitar créditos, recargar tu saldo, escuchar música, rentar películas, crear tu propio negocio y ¡muchos más!</Descripcion>
            <ChipContainer>
                <Chips />
                {/* <Compras /> */}
                {/* <Diversion /> */}
                <Negocio />
            </ChipContainer>
        </Container>
    )
}

export default Shop
