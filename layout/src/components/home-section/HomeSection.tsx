import * as  React from 'react'
import Imagen from '../../components/home-section/imagen/Imagen';
import Texto from '../../components/home-section/texto/Texto';
import {Container} from "./home-section.styles";

const Home = () => {
    return (
        <Container>
            <Texto />
            <Imagen />
        </Container>
    )
}

export default Home;
