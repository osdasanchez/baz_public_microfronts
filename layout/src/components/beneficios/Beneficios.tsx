import * as React from 'react'
import { Container, ContainerDown, ContainerUp, TituloNegro } from './beneficios.styles';
import Confiable from './confiable/Confiable';
import Facil from './facil/Facil';
import Protegida from './protegida/Protegida';
import Rapido from './rapido/Rapido';
import Seguro from './seguro/Seguro';

const Beneficios = () => {
    return (
        <Container>
            <TituloNegro>Y no solo lo decimos nosotros... lo dicen todos los que ya son parte de la comunidad baz.</TituloNegro>
            <ContainerUp>
                <Rapido />
                <Seguro />
                <Confiable />
            </ContainerUp>
            <ContainerDown>
                <Facil />
                <Protegida />
            </ContainerDown>
        </Container>
    )
}

export default Beneficios
