import * as React from 'react'
import { Container, ContainerDown, ContainerUp, TituloNegro, TituloVerde } from './beneficios.styles';
import Confiable from './confiable/Confiable';
import Facil from './facil/Facil';
import Protegida from './protegida/Protegida';
import Rapido from './rapido/Rapido';
import Seguro from './seguro/Seguro';

const Beneficios = () => {
    return (
        <Container>
            <TituloVerde>
                ¡baz, <TituloNegro> es lo que necesitas!</TituloNegro>
            </TituloVerde>
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
