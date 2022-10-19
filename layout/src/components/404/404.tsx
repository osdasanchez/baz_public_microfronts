import * as React from 'react'
import { Container, Texto404 } from './404.styles';
import Boton from './boton/Boton';
import Imagen from './imagen/Imagen';

const Page404 = () => {
    return (
        <Container>
            <Imagen />
            <Texto404>Oops. No encontramos la página que buscas ...o ya no existe.</Texto404>
            <Boton />
        </Container>
    )
}

export default Page404