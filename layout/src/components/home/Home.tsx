import React from 'react'
import { Container } from './home.styles';
import Imagen from './imagen/Imagen';
import Texto from './texto/Texto';

const Home = () => {
    return (
        <Container>
            <Texto />
            <Imagen />
        </Container>
    )
}

export default Home
